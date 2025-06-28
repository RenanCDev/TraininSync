# pylint: disable=missing-module-docstring, missing-class-docstring, missing-function-docstring, no-member, too-many-instance-atributes

"""Testes para o ViewSet de ContratoDeServico."""

from datetime import date, time, timedelta

from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from traininsync.models import (
    Agenda,
    Aluno,
    ContratoDeServico,
    DadosBancarios,
    Personal,
    Pessoa,
    Servico,
)


class ContratoDeServicoViewSetTestCase(TestCase):
    """Testa as operações da viewset de ContratoDeServico."""

    def setUp(self):
        """Configuração inicial do teste com instâncias necessárias."""
        self.client = APIClient()

        self.dados_bancarios = DadosBancarios.objects.create(
            numero_conta="12345",
            agencia="0001",
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
            pessoa=self.pessoa_aluno,
            altura=1.70,
            peso=65.0,
            status=True,
        )

        self.servico = Servico.objects.create(
            tipo_de_servico="Treino Personalizado",
            descricao_do_servico="Descrição do serviço",
            valor_do_servico=150.0,
        )

        self.agenda = Agenda.objects.create(
            personal=self.personal,
            dia=date.today() + timedelta(days=1),
            hora_inicio=time(6, 0),
            hora_fim=time(7, 0),
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

        self.url_list = reverse("traininsync:contratodeservico-list")
        self.url_detail = reverse(
            "traininsync:contratodeservico-detail",
            kwargs={"pk": self.contrato.pk},
        )

    def test_list_contratos(self):
        """Deve listar contratos existentes."""
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_retrieve_contrato(self):
        """Deve retornar detalhes de um contrato específico."""
        response = self.client.get(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["localidade_desejada"], "Academia Centro")

        #  def test_create_contrato(self):
        #      """Deve criar um novo contrato com dados aninhados."""
        #     nova_agenda = Agenda.objects.create(
        #        personal=self.personal,
        #        dia=date.today() + timedelta(days=2),
        #        hora_inicio=time(12, 0),
        #        hora_fim=time(13, 0),
        #        local="Academia Z Sul",
        #        disponivel=True,
        #   )

        #    data = {
        #       "personal": self.personal.id,
        #       "aluno": self.aluno.id,
        #       "horario": {
        #           "dia": nova_agenda.dia.isoformat(),
        #           "hora_inicio": nova_agenda.hora_inicio.strftime("%H:%M:%S"),
        #           "hora_fim": nova_agenda.hora_fim.strftime("%H:%M:%S"),
        #           "local": nova_agenda.local,
        #           "disponivel": nova_agenda.disponivel,
        #           "personal": self.personal.id,  # string!
        #       },
        #       "servico_desejado": {
        #           "tipo_de_servico": self.servico.tipo_de_servico,
        #           "descricao_do_servico": self.servico.descricao_do_servico,
        #            "valor_do_servico": self.servico.valor_do_servico,
        #       },
        #       "localidade_desejada": "Nova Localidade",
        #       "status": True,
        #   }

        #   response = self.client.post(self.url_list, data, format="json")
        #   self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        #   self.assertEqual(ContratoDeServico.objects.count(), 2)

        # def test_update_contrato(self):
        """Deve atualizar um contrato existente com dados aninhados."""
        # data = {
        #     "personal": str(self.personal.id),
        #     "aluno": self.aluno.id,
        #     "horario": {
        #         "personal": str(self.personal.id),
        #         "dia": self.agenda.dia.isoformat(),
        #         "hora_inicio": self.agenda.hora_inicio.strftime("%H:%M:%S"),
        #         "hora_fim": self.agenda.hora_fim.strftime("%H:%M:%S"),
        #         "local": self.agenda.local,
        #         "disponivel": self.agenda.disponivel,
        #     },
        #     "servico_desejado": {
        #         "tipo_de_servico": self.servico.tipo_de_servico,
        #         "descricao_do_servico": self.servico.descricao_do_servico,
        #         "valor_do_servico": self.servico.valor_do_servico,
        #     },
        #     "localidade_desejada": "Local Atualizado",
        #     "status": False,
        # }

        # response = self.client.put(self.url_detail, data, format="json")
        # self.assertEqual(response.status_code, status.HTTP_200_OK)

        # self.contrato.refresh_from_db()
        # self.assertEqual(self.contrato.localidade_desejada, "Local Atualizado")

    def test_delete_contrato(self):
        """Deve deletar um contrato."""
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(ContratoDeServico.objects.count(), 0)
