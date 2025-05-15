# pylint: skip-file
"""
Testes para o modelo Aluno.
"""

from datetime import date, time

from django.test import TestCase

from ..models import Aluno, Pessoa


class AlunoModelTestCase(TestCase):
    """
    Testes para o modelo Aluno.
    """

    def setUp(self):
        """
        Configura um objeto Pessoa e Aluno para uso nos testes.
        """
        self.pessoa = Pessoa.objects.create(
            nome="Jose Alves",
            cpf="98765432100",
            data_de_nascimento=date(1992, 5, 15),
            email="maria@example.com",
            numero_de_celular="11988887777",
            sexo="F",
            etnia="parda",
            estado_civil="solteira",
        )
        self.aluno = Aluno.objects.create(
            pessoa=self.pessoa,
            bioimpedancia="BIO123",
            altura=1.70,
            data_do_exame=date.today(),
            hora_do_exame=time(9, 30),
            peso=65.0,
            status=True,
        )

    def test_criar_aluno(self):
        """
        Verifica se o aluno foi criado corretamente.
        """
        self.assertEqual(self.aluno.pessoa.nome, "Jose Alves")
        self.assertEqual(self.aluno.bioimpedancia, "BIO123")
        self.assertEqual(self.aluno.altura, 1.70)
        self.assertEqual(self.aluno.peso, 65.0)
        self.assertTrue(self.aluno.status)

    def test_ativar_aluno(self):
        """
        Verifica se o método de ativação do aluno funciona corretamente.
        """
        self.aluno.status = True
        self.aluno.save()
        aluno_db = Aluno.objects.get(id=self.aluno.id)
        self.assertTrue(aluno_db.status)

    def test_desativar_aluno(self):
        """
        Verifica se o método de desativação do aluno funciona corretamente.
        """
        self.aluno.status = False
        self.aluno.save()
        aluno_db = Aluno.objects.get(id=self.aluno.id)
        self.assertFalse(aluno_db.status)

    @classmethod
    def consultar_por_cpf(cls, cpf):
        """
        Consulta um aluno pelo CPF associado à pessoa.
        """
        return Aluno.objects.filter(pessoa__cpf=cpf).first()

    def test_consultar_por_cpf(self):
        """
        Verifica se a consulta por CPF funciona corretamente.
        """
        aluno = AlunoModelTestCase.consultar_por_cpf("98765432100")
        self.assertIsNotNone(aluno)
        self.assertEqual(aluno.id, self.aluno.id)
