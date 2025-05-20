# pylint: disable=missing-module-docstring, missing-class-docstring, missing-function-docstring, no-member

"""Testes para o viewset de Serviço da aplicação TraininSync."""

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from traininsync.models import Servico


class ServicoViewSetTestCase(TestCase):
    """Testes para as operações CRUD no endpoint de Serviço."""

    def setUp(self):
        """Configura os dados iniciais para os testes."""
        self.client = APIClient()

        # Criar Serviço de exemplo
        self.servico = Servico.objects.create(
            tipo_de_servico="Treino Personalizado",
            descricao_do_servico="Sessão individual de treinamento",
            valor_do_servico=150.00,
        )

        self.url_list = reverse("traininsync:servico-list")
        self.url_detail = reverse(
            "traininsync:servico-detail", kwargs={"pk": self.servico.pk}
        )

    def test_list_servicos(self):
        """Testa a listagem de serviços."""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_retrieve_servico(self):
        """Testa a recuperação de um serviço específico."""
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["tipo_de_servico"], "Treino Personalizado")

    def test_create_servico(self):
        """Testa a criação de um novo serviço."""
        data = {
            "tipo_de_servico": "Avaliação Física",
            "descricao_do_servico": "Avaliação completa com bioimpedância",
            "valor_do_servico": 200.00,
        }
        response = self.client.post(self.url_list, data, format="json")
        if response.status_code != status.HTTP_201_CREATED:
            print("Erro na criação:", response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Servico.objects.count(), 2)

    def test_update_servico(self):
        """Testa a atualização de um serviço existente."""
        data = {
            "tipo_de_servico": "Treino Personalizado Premium",
            "descricao_do_servico": "Sessão individual + acompanhamento nutricional",
            "valor_do_servico": 180.00,
        }
        response = self.client.put(self.url_detail, data, format="json")
        if response.status_code != status.HTTP_200_OK:
            print("Erro na atualização:", response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.servico.refresh_from_db()
        self.assertEqual(self.servico.valor_do_servico, 180.00)

    def test_delete_servico(self):
        """Testa a exclusão de um serviço."""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Servico.objects.count(), 0)
