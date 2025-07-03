# pylint: disable=missing-module-docstring, missing-class-docstring, missing-function-docstring, no-member

"""Testes para o ViewSet de RegistroDeProgresso."""

from datetime import date, time

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from traininsync.models import Aluno, RegistroDeProgresso


class RegistroDeProgressoViewSetTestCase(TestCase):
    """Casos de teste para o RegistroDeProgressoViewSet."""

    def setUp(self):
        """Configuração inicial antes de cada teste."""
        self.client = APIClient()

        # Criar Aluno diretamente
        self.aluno = Aluno.objects.create(
            nome="Aluno Teste",
            cpf="52998224725",  # CPF válido
            data_de_nascimento="1995-01-01",
            email="aluno@test.com",
            numero_de_celular="11988888888",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
            altura=1.75,
            peso=70.0,
            status=True,
            data_do_exame=date.today(),
            hora_do_exame=time(8, 0),
        )

        # Criar Registro de Progresso
        self.registro = RegistroDeProgresso.objects.create(
            aluno=self.aluno,
            data=date.today(),
            altura=1.75,
            peso=70.0,
            massa_gorda=15.0,
            massa_magra=55.0,
        )

        self.url_list = reverse("traininsync:registrodeprogresso-list")
        self.url_detail = reverse(
            "traininsync:registrodeprogresso-detail", kwargs={"pk": self.registro.pk}
        )

    def test_list_registros(self):
        """Testa a listagem dos registros de progresso."""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_retrieve_registro(self):
        """Testa a recuperação de um único registro de progresso."""
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(float(response.data["peso"]), 70.0)

    def test_create_registro(self):
        """Testa a criação de um novo registro de progresso."""
        data = {
            "aluno": self.aluno.id,
            "data": str(date.today()),
            "altura": 1.76,
            "peso": 68.5,
            "massa_gorda": 14.5,
            "massa_magra": 54.0,
            "massa_muscular": 30.0,
            "hidratacao": 60.0,
        }
        response = self.client.post(self.url_list, data, format="json")
        if response.status_code != status.HTTP_201_CREATED:
            print("Erro na criação:", response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(RegistroDeProgresso.objects.count(), 2)

    def test_update_registro(self):
        """Testa a atualização de um registro de progresso existente."""
        data = {
            "aluno": self.aluno.id,
            "data": str(date.today()),
            "altura": 1.76,
            "peso": 69.0,
            "massa_gorda": 14.0,
            "massa_magra": 55.0,
        }
        response = self.client.put(self.url_detail, data, format="json")
        if response.status_code != status.HTTP_200_OK:
            print("Erro na atualização:", response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.registro.refresh_from_db()
        self.assertEqual(self.registro.peso, 69.0)

    def test_delete_registro(self):
        """Testa a exclusão de um registro de progresso."""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(RegistroDeProgresso.objects.count(), 0)
