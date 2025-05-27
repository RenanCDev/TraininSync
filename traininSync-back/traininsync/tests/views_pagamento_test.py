# pylint: disable=missing-module-docstring, missing-class-docstring, missing-function-docstring, no-member

"""Testes para as views de Pagamento da API."""

from datetime import date

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from traininsync.models import (
    Agenda,
    Aluno,
    ContratoDeServico,
    DadosBancarios,
    Pagamento,
    Personal,
    Pessoa,
    Servico,
)


class PagamentoViewSetTestCase(TestCase):
    """Testa as operações CRUD da view de Pagamento."""

    def setUp(self):
        """Cria os dados necessários para os testes."""
        self.client = APIClient()

        self.dados_bancarios = DadosBancarios.objects.create(
            numero_conta="12345", agencia="0001"
        )

        self.personal = Personal.objects.create(
            nome="Personal Trainer",
            cpf="39742806058",
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

        self.pessoa_aluno = Pessoa.objects.create(
            nome="Aluno Teste",
            cpf="52998224725",
            data_de_nascimento="1995-01-01",
            email="aluno@test.com",
            numero_de_celular="11988888888",
            sexo="F",
            etnia="parda",
            estado_civil="solteiro",
        )

        self.aluno = Aluno.objects.create(
            pessoa=self.pessoa_aluno, altura=1.70, peso=65.0, status=True
        )

        self.servico = Servico.objects.create(
            tipo_de_servico="Treino Personalizado",
            descricao_do_servico="Descrição do serviço",
            valor_do_servico=150.0,
        )

        self.agenda = Agenda.objects.create(
            personal=self.personal,
            dia=date.today(),
            hora_inicio="08:00:00",
            hora_fim="09:00:00",
            local="Academia Centro",
            disponivel=True,
        )

        self.contrato = ContratoDeServico.objects.create(
            personal=self.personal,
            aluno=self.aluno,
            horario=self.agenda,
            servico_desejado=self.servico,
            localidade_desejada="Academia Centro",
            status=True,
        )

        self.pagamento = Pagamento.objects.create(
            aluno=self.aluno,
            contrato=self.contrato,
            valor=150.00,
            descricao="Pagamento teste",
        )

        self.url_list = reverse("traininsync:pagamento-list")
        self.url_detail = reverse(
            "traininsync:pagamento-detail", kwargs={"pk": self.pagamento.pk}
        )

    def test_list_pagamentos(self):
        """Testa listagem de pagamentos."""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_retrieve_pagamento(self):
        """Testa recuperação de um pagamento específico."""
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(float(response.data["valor"]), 150.00)

    def test_create_pagamento(self):
        """Testa criação de um novo pagamento."""
        data = {
            "aluno": self.aluno.id,
            "contrato": self.contrato.id,
            "valor": 200.00,
            "descricao": "Novo pagamento",
        }
        response = self.client.post(self.url_list, data, format="json")
        if response.status_code != status.HTTP_201_CREATED:
            print("Erro na criação:", response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Pagamento.objects.count(), 2)

    def test_update_pagamento(self):
        """Testa atualização de um pagamento existente."""
        data = {
            "aluno": self.aluno.id,
            "contrato": self.contrato.id,
            "valor": 300.00,
            "descricao": "Pagamento atualizado",
        }
        response = self.client.put(self.url_detail, data, format="json")
        if response.status_code != status.HTTP_200_OK:
            print("Erro na atualização:", response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.pagamento.refresh_from_db()
        self.assertEqual(self.pagamento.valor, 300.00)

    def test_delete_pagamento(self):
        """Testa remoção de um pagamento."""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Pagamento.objects.count(), 0)
