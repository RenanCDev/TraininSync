# pylint: disable=missing-module-docstring, missing-class-docstring, missing-function-docstring, no-member

import random

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from traininsync.models import DadosBancarios, Personal


def gerar_cpf_valido():
    """Gera um CPF válido aleatório com base na fórmula dos dígitos verificadores."""
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


class PersonalViewSetTestCase(TestCase):
    """Testes para o endpoint de Personal."""

    def setUp(self):
        """Configura os dados iniciais para os testes."""
        self.client = APIClient()

        # Criar dados bancários
        self.dados_bancarios = DadosBancarios.objects.create(
            numero_conta="12345", agencia="0001"
        )

        # Gerar CPFs válidos
        self.cpf_valido1 = gerar_cpf_valido()
        self.cpf_valido2 = gerar_cpf_valido()

        # Criar Personal
        self.personal = Personal.objects.create(
            nome="Test Personal",
            cpf=self.cpf_valido1,
            data_de_nascimento="1990-01-01",
            email="personal@test.com",
            numero_de_celular="11999999999",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
            cref="123456",
            horarios_disponiveis=10.0,
            locais_disponiveis="Local Test",
            dados_bancarios=self.dados_bancarios,
        )

        self.url_list = reverse("traininsync:personal-list")
        self.url_detail = reverse(
            "traininsync:personal-detail", kwargs={"pk": self.personal.pk}
        )

    def test_list_personals(self):
        """Testa a listagem de personals."""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_retrieve_personal(self):
        """Testa o detalhamento de um personal."""
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["cref"], "123456")

    def test_create_personal(self):
        """Testa a criação de um novo personal."""
        data = {
            "nome": "New Personal",
            "cpf": self.cpf_valido2,
            "data_de_nascimento": "1985-01-01",
            "email": "new@test.com",
            "numero_de_celular": "11988888888",
            "sexo": "F",
            "etnia": "parda",
            "estado_civil": "casado",
            "cref": "654321",
            "horarios_disponiveis": 15.0,
            "locais_disponiveis": "New Local",
            "dados_bancarios": {"numero_conta": "54321", "agencia": "0002"},
        }
        response = self.client.post(self.url_list, data, format="json")
        if response.status_code != status.HTTP_201_CREATED:
            print("Erro na criação:", response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Personal.objects.count(), 2)

    def test_update_personal(self):
        """Testa a atualização de um personal existente."""
        data = {
            "nome": "Updated Personal",
            "cpf": self.cpf_valido1,
            "data_de_nascimento": "1990-01-01",
            "email": "updated@test.com",
            "numero_de_celular": "11999999999",
            "sexo": "M",
            "etnia": "branca",
            "estado_civil": "solteiro",
            "cref": "123456",
            "horarios_disponiveis": 20.0,
            "locais_disponiveis": "Updated Local",
            "dados_bancarios": {"numero_conta": "12345", "agencia": "0001"},
        }
        response = self.client.put(self.url_detail, data, format="json")
        if response.status_code != status.HTTP_200_OK:
            print("Erro na atualização:", response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.personal.refresh_from_db()
        self.assertEqual(self.personal.locais_disponiveis, "Updated Local")

    def test_delete_personal(self):
        """Testa a exclusão de um personal."""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Personal.objects.count(), 0)
