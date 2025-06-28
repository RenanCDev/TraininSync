# pylint: skip-file
"""
Testes para o modelo Contrato de Servico.
"""

from datetime import date, time

from django.test import TestCase

from ..models import (
    Agenda,
    Aluno,
    ContratoDeServico,
    DadosBancarios,
    Personal,
    Pessoa,
    Servico,
)


class ContratoDeServicoTestCase(TestCase):
    """
    Testes para o modelo Contrato de Servico.
    """

    def setUp(self):
        """
        Configura objetos Pessoa, Aluno, Personal, Servico e ContratoDeServico para uso nos testes.
        """
        self.dados_bancarios = DadosBancarios.objects.create(
            numero_conta="123456", agencia="0001"
        )

        self.personal = Personal.objects.create(
            nome="Personal Teste",
            cpf="98765432100",
            data_de_nascimento=date(1985, 5, 20),
            email="personal@teste.com",
            numero_de_celular="11988888888",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
            cref="CREF54321",
            especialidades="Musculação",
            experiencia_profissional="10 anos",
            dados_bancarios=self.dados_bancarios,
            horarios_disponiveis=20.0,
            locais_disponiveis="Academia Central",
        )

        self.pessoa = Pessoa.objects.create(
            nome="Aluno Teste",
            cpf="12345678909",
            data_de_nascimento=date(1995, 1, 1),
            email="aluno@teste.com",
            numero_de_celular="11999999999",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
        )

        self.aluno = Aluno.objects.create(
            pessoa=self.pessoa,
            bioimpedancia="BIO1234567890",
            altura=1.75,
            data_do_exame=date.today(),
            hora_do_exame=time(8, 0),
            peso=70.0,
        )

        self.servico = Servico.objects.create(
            tipo_de_servico="Treino Avançado",
            descricao_do_servico="Treino focado em hipertrofia",
            valor_do_servico=200.0,
        )

        self.agenda = Agenda.objects.create(
            personal=self.personal,
            dia=date.today(),
            hora_inicio=time(8, 0),
            hora_fim=time(9, 0),
            local="Academia Central",
        )

        self.contrato = ContratoDeServico.objects.create(
            personal=self.personal,
            aluno=self.aluno,
            horario=self.agenda,
            servico_desejado=self.servico,
            localidade_desejada="Academia Central",
        )

    def test_criar_contrato(self):
        """
        Verifica se o contrato de serviço foi criado corretamente.
        """
        self.assertEqual(self.contrato.localidade_desejada, "Academia Central")
        self.assertEqual(
            self.contrato.servico_desejado.tipo_de_servico, "Treino Avançado"
        )
        self.assertEqual(self.contrato.personal.nome, "Personal Teste")
        self.assertEqual(self.contrato.aluno.pessoa.nome, "Aluno Teste")

    def test_consultar_contrato(self):
        """
        Verifica se a consulta de contrato por localidade funciona corretamente.
        """
        contrato_consultado = ContratoDeServico.objects.filter(
            localidade_desejada="Academia Central"
        ).first()
        self.assertIsNotNone(contrato_consultado)
        self.assertEqual(contrato_consultado.id, self.contrato.id)

    def test_desativar_contrato(self):
        """
        Verifica se um contrato pode ser desativado corretamente.
        """
        self.contrato.delete()
        contrato_db = ContratoDeServico.objects.filter(id=self.contrato.id).first()
        self.assertIsNone(contrato_db)

    def test_ativar_contrato(self):
        """
        Verifica se um contrato pode ser ativado corretamente.
        """
        nova_agenda = Agenda.objects.create(
            personal=self.personal,
            dia=date.today(),
            hora_inicio=time(10, 0),
            hora_fim=time(11, 0),
            local="Academia B",
        )

        novo_contrato = ContratoDeServico.objects.create(
            personal=self.personal,
            aluno=self.aluno,
            horario=nova_agenda,  # campo obrigatório corrigido
            servico_desejado=self.servico,
            localidade_desejada="Academia B",
        )
        self.assertIsNotNone(novo_contrato)
        self.assertEqual(novo_contrato.localidade_desejada, "Academia B")
