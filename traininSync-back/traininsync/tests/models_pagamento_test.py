# pylint: skip-file
"""
Testes para o modelo Pagamento.
"""
from datetime import date, time

from django.test import TestCase

from ..models import Agenda  # <-- Import necessário!
from ..models import (
    Aluno,
    ContratoDeServico,
    DadosBancarios,
    Pagamento,
    Personal,
    Pessoa,
    Servico,
)


class PagamentoModelTestCase(TestCase):
    """
    Testes para o modelo Pagamento.
    """

    def setUp(self):
        pessoa = Pessoa.objects.create(
            nome="João Silva",
            cpf="12345678901",
            data_de_nascimento=date(1990, 1, 1),
            email="joao@example.com",
            numero_de_celular="11999999999",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
        )

        aluno = Aluno.objects.create(
            pessoa=pessoa,
            bioimpedancia="BIO123",
            altura=1.75,
            data_do_exame=date.today(),
            hora_do_exame=time(8, 0),
            peso=70.0,
            status=True,
        )

        dados_bancarios = DadosBancarios.objects.create(
            numero_conta="123456-7", agencia="0012"
        )

        personal = Personal.objects.create(
            nome="Personal Teste",
            cpf="98765432100",
            data_de_nascimento=date(1980, 1, 1),
            email="personal@teste.com",
            numero_de_celular="11988888888",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
            cref="CREF54321",
            especialidades="Musculação",
            experiencia_profissional="10 anos",
            dados_bancarios=dados_bancarios,
            horarios_disponiveis=20.0,
            locais_disponiveis="Academia Central",
        )

        servico = Servico.objects.create(
            tipo_de_servico="Treino Avançado",
            descricao_do_servico="Treino focado em hipertrofia",
            valor_do_servico=200.0,
        )

        horario = Agenda.objects.create(
            personal=personal,
            dia=date.today(),
            hora_inicio=time(9, 0),
            hora_fim=time(10, 0),
            local="Academia Central",
        )

        self.contrato = ContratoDeServico.objects.create(
            personal=personal,
            aluno=aluno,
            horario=horario,  # <-- ESSENCIAL!
            servico_desejado=servico,
            localidade_desejada="Academia Central",
        )

        self.pagamento = Pagamento.objects.create(
            aluno=aluno,
            contrato=self.contrato,
            valor=150.0,
            descricao="Pagamento mensal do serviço",
        )

    def test_criar_pagamento(self):
        """
        Verifica se o pagamento foi criado corretamente.
        """
        self.assertEqual(self.pagamento.valor, 150.0)
        self.assertEqual(self.pagamento.descricao, "Pagamento mensal do serviço")
        self.assertEqual(self.pagamento.aluno.pessoa.nome, "João Silva")
        self.assertEqual(self.pagamento.contrato, self.contrato)

    def test_consultar_pagamento(self):
        """
        Verifica se a consulta de pagamento funciona corretamente.
        """
        pagamento = Pagamento.objects.get(id=self.pagamento.id)
        self.assertIsNotNone(pagamento)
        self.assertEqual(pagamento.id, self.pagamento.id)

    def test_consultar_por_aluno(self):
        """
        Verifica se a consulta de pagamentos por aluno funciona corretamente.
        """
        pagamentos = Pagamento.objects.filter(aluno=self.pagamento.aluno)
        self.assertTrue(pagamentos.exists())
        self.assertEqual(pagamentos.first().id, self.pagamento.id)

    def test_consultar_por_contrato(self):
        """
        Verifica se a consulta de pagamentos por contrato funciona corretamente.
        """
        pagamentos = Pagamento.objects.filter(contrato=self.pagamento.contrato)
        self.assertTrue(pagamentos.exists())
        self.assertEqual(pagamentos.first().id, self.pagamento.id)

    def test_excluir_pagamento(self):
        """
        Verifica se um pagamento pode ser excluído corretamente.
        """
        self.pagamento.delete()
        pagamento_excluido = Pagamento.objects.filter(id=self.pagamento.id).first()
        self.assertIsNone(pagamento_excluido)

    @classmethod
    def consultar_por_descricao(cls, descricao):
        """
        Consulta um pagamento pela descrição.
        """
        return Pagamento.objects.filter(descricao=descricao).first()

    def test_consultar_por_descricao(self):
        """
        Verifica se a consulta por descrição funciona corretamente.
        """
        pagamento = PagamentoModelTestCase.consultar_por_descricao(
            "Pagamento mensal do serviço"
        )
        self.assertIsNotNone(pagamento)
        self.assertEqual(pagamento.id, self.pagamento.id)
