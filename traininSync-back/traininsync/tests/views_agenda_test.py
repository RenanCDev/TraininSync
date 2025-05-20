# pylint: disable=missing-module-docstring, missing-class-docstring, missing-function-docstring, no-member

"""Testes para a viewset de Agenda."""

from datetime import date, time, timedelta

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from traininsync.models import Agenda, DadosBancarios, Personal


class AgendaViewSetTestCase(TestCase):
    """Casos de teste para a API de Agenda."""

    def setUp(self):
        """Configura os dados iniciais para os testes."""
        self.client = APIClient()

        self.dados_bancarios = DadosBancarios.objects.create(
            numero_conta="12345", agencia="0001"
        )

        self.personal = Personal.objects.create(
            nome="Personal Trainer",
            cpf="12345678909",
            data_de_nascimento="1980-01-01",
            email="personal@test.com",
            numero_de_celular="11999999999",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
            cref="123456",
            horarios_disponiveis=10.0,
            locais_disponiveis="Academia Centro",
            dados_bancarios=self.dados_bancarios,
        )

        self.agenda = Agenda.objects.create(
            personal=self.personal,
            dia=date.today() + timedelta(days=1),
            hora_inicio=time(8, 0),
            hora_fim=time(9, 0),
            local="Academia Centro",
            disponivel=True,
        )

        self.url_list = reverse("traininsync:agenda-list")
        self.url_detail = reverse(
            "traininsync:agenda-detail", kwargs={"pk": self.agenda.pk}
        )

    def test_list_agendas(self):
        """Testa listagem de agendas."""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_retrieve_agenda(self):
        """Testa recuperação de uma agenda específica."""
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["local"], "Academia Centro")

    def test_create_agenda(self):
        """Testa criação de uma nova agenda."""
        data = {
            "personal": self.personal.id,
            "dia": str(date.today() + timedelta(days=2)),
            "hora_inicio": "10:00:00",
            "hora_fim": "11:00:00",
            "local": "Academia Zona Sul",
            "disponivel": True,
        }
        response = self.client.post(self.url_list, data, format="json")
        if response.status_code != status.HTTP_201_CREATED:
            print("Erro na criação:", response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Agenda.objects.count(), 2)

    def test_update_agenda(self):
        """Testa atualização de uma agenda existente."""
        data = {
            "personal": self.personal.id,
            "dia": str(date.today() + timedelta(days=1)),
            "hora_inicio": "14:00:00",
            "hora_fim": "15:00:00",
            "local": "Academia Zona Norte",
            "disponivel": False,
        }
        response = self.client.put(self.url_detail, data, format="json")
        if response.status_code != status.HTTP_200_OK:
            print("Erro na atualização:", response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.agenda.refresh_from_db()
        self.assertEqual(self.agenda.local, "Academia Zona Norte")

    def test_delete_agenda(self):
        """Testa exclusão de uma agenda."""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Agenda.objects.count(), 0)
