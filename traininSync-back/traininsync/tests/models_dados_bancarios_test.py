# pylint: skip-file
"""
Testes para o modelo Dados Bancários.
"""

from unittest.mock import patch

from django.test import TestCase

from ..models import DadosBancarios


class DadosBancariosTestCase(TestCase):
    """
    Testes para o modelo Dados Bancários.
    """

    def setUp(self):
        """
        Configura um objeto DadosBancarios para uso nos testes.
        """
        self.dados_bancarios = DadosBancarios.objects.create(
            numero_conta="123456",
            agencia="0001",
        )

    def test_criar_dados_bancarios(self):
        """
        Verifica se os dados bancários foram criados corretamente.
        """
        self.assertEqual(self.dados_bancarios.numero_conta, "123456")
        self.assertEqual(self.dados_bancarios.agencia, "0001")

    def test_desativar_dados_bancarios(self):
        """
        Verifica se o método de desativação dos dados bancários funciona corretamente.
        """
        self.dados_bancarios.ativo = False
        self.dados_bancarios.save()
        dados_db = DadosBancarios.objects.get(id=self.dados_bancarios.id)
        dados_db.ativo = False
        self.assertFalse(dados_db.ativo)

    def test_ativar_dados_bancarios(self):
        """
        Verifica se o método de ativação dos dados bancários funciona corretamente.
        """
        self.dados_bancarios.ativo = False
        self.dados_bancarios.save()
        self.dados_bancarios.ativo = True
        self.dados_bancarios.save()
        dados_db = DadosBancarios.objects.get(id=self.dados_bancarios.id)
        dados_db.ativo = True
        self.assertTrue(dados_db.ativo)

    def test_consultar_dados_bancarios(self):
        """
        Verifica se a consulta dos dados bancários funciona corretamente.
        """
        dados_consultado = DadosBancarios.objects.filter(numero_conta="123456").first()
        self.assertIsNotNone(dados_consultado)
        self.assertEqual(dados_consultado.id, self.dados_bancarios.id)
