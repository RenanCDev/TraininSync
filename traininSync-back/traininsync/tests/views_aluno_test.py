# pylint: disable=missing-module-docstring, missing-class-docstring, missing-function-docstring, no-member

"""Testes para o ViewSet de Aluno."""

import random

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from traininsync.models import Aluno


def gerar_cpf_valido():
    """Gera um CPF válido randomicamente."""

    def calcula_digito(cpf):
        soma = 0
        for i, num in enumerate(cpf):
            soma += int(num) * (len(cpf) + 1 - i)
        resto = soma % 11
        return "0" if resto < 2 else str(11 - resto)

    cpf = [str(random.randint(0, 9)) for _ in range(9)]
    cpf.append(calcula_digito(cpf))
    cpf.append(calcula_digito(cpf[:10]))
    return "".join(cpf)


class AlunoViewSetTestCase(TestCase):
    """Testes para o ViewSet de Aluno."""

    def setUp(self):
        """Configuração inicial para os testes."""
        self.client = APIClient()

        # Gerar CPFs válidos
        self.cpf_valido1 = gerar_cpf_valido()
        self.cpf_valido2 = gerar_cpf_valido()
        self.cpf_valido3 = gerar_cpf_valido()

        # Criar Aluno
        self.aluno = Aluno.objects.create(
            nome="Test Aluno",
            cpf=self.cpf_valido1,
            data_de_nascimento="1995-01-01",
            email="aluno@test.com",
            numero_de_celular="11999999999",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
            altura=1.75,
            peso=70.0,
            status=True,
        )

        self.url_list = reverse("traininsync:aluno-list")
        self.url_detail = reverse(
            "traininsync:aluno-detail", kwargs={"pk": self.aluno.pk}
        )

    def test_list_alunos(self):
        """Testa listagem de alunos."""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_retrieve_aluno(self):
        """Testa recuperação de um aluno específico."""
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(float(response.data["peso"]), 70.0)

    def test_create_aluno(self):
        """Testa criação de um novo aluno."""
        data = {
            "nome": "New Aluno",
            "cpf": self.cpf_valido2,
            "data_de_nascimento": "1998-01-01",
            "email": "newaluno@test.com",
            "numero_de_celular": "11988888888",
            "sexo": "F",
            "etnia": "parda",
            "estado_civil": "casado",
            "altura": 1.65,
            "peso": 60.0,
            "status": True,
        }
        response = self.client.post(self.url_list, data, format="json")
        if response.status_code != status.HTTP_201_CREATED:
            print("Erro na criação:", response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Aluno.objects.count(), 2)

    def test_update_aluno(self):
        """Testa atualização dos dados do aluno."""
        data = {
            "nome": "Updated Aluno",
            "cpf": self.cpf_valido3,
            "data_de_nascimento": "1995-01-01",
            "email": "updated@test.com",
            "numero_de_celular": "11999999999",
            "sexo": "M",
            "etnia": "branca",
            "estado_civil": "solteiro",
            "altura": 1.80,
            "peso": 75.0,
            "status": True,
        }
        response = self.client.put(self.url_detail, data, format="json")
        if response.status_code != status.HTTP_200_OK:
            print("Erro na atualização:", response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.aluno.refresh_from_db()
        self.assertEqual(self.aluno.altura, 1.80)

    def test_delete_aluno(self):
        """Testa exclusão do aluno."""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Aluno.objects.count(), 0)
