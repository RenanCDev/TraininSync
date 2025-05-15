# pylint: skip-file
"""
Testes para o modelo Pessoa.
"""

from datetime import date

from django.test import TestCase

from ..models import Pessoa


class PessoaTestCase(TestCase):
    """
    Testes para o modelo Pessoa.
    """

    def setUp(self):
        """
        Configura os objetos necessários para os testes.
        """
        self.pessoa = Pessoa.objects.create(
            nome="João Silva",
            cpf="12345678909",
            data_de_nascimento=date(1990, 1, 1),
            email="joao@example.com",
            numero_de_celular="11999999999",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro",
        )

    def test_criar_pessoa(self):
        """
        Verifica se a pessoa foi criada corretamente.
        """
        self.assertEqual(self.pessoa.nome, "João Silva")
        self.assertEqual(self.pessoa.cpf, "12345678909")
        self.assertEqual(self.pessoa.email, "joao@example.com")

    def test_ativar_pessoa(self):
        """
        Verifica se o método de atualização do email funciona corretamente.
        """
        self.pessoa.email = "joao_ativado@example.com"
        self.pessoa.save()
        pessoa_db = Pessoa.objects.get(id=self.pessoa.id)
        self.assertEqual(pessoa_db.email, "joao_ativado@example.com")

    def test_desativar_pessoa(self):
        """
        Verifica se o método de atualização do email funciona corretamente.
        """
        self.pessoa.email = "joao_desativado@example.com"
        self.pessoa.save()
        pessoa_db = Pessoa.objects.get(id=self.pessoa.id)
        self.assertEqual(pessoa_db.email, "joao_desativado@example.com")

    def test_consultar_por_cpf(self):
        """
        Verifica se a consulta por CPF funciona corretamente.
        """
        pessoa = Pessoa.objects.filter(cpf="12345678909").first()
        self.assertIsNotNone(pessoa)
        self.assertEqual(pessoa.id, self.pessoa.id)
