# pylint: skip-file
"""
Testes para o modelo Aluno.
"""

from datetime import date, time

from django.test import TestCase

from ..models import Aluno


class AlunoModelTestCase(TestCase):
    """
    Testes para o modelo Aluno.
    """

    def setUp(self):
        """
        Configura um objeto Aluno para uso nos testes.
        """
        self.aluno = Aluno.objects.create(
            nome="Jose Alves",
            cpf="98765432100",
            data_de_nascimento=date(1992, 5, 15),
            email="maria@example.com",
            numero_de_celular="11988887777",
            sexo="F",
            etnia="parda",
            estado_civil="solteiro",
            bioimpedancia="BIO123",
            altura=1.70,
            data_do_exame=date.today(),
            hora_do_exame=time(9, 30),
            peso=65.0,
            status=True,
        )

    def test_criar_aluno(self):
        self.assertEqual(self.aluno.nome, "Jose Alves")
        self.assertEqual(self.aluno.bioimpedancia, "BIO123")
        self.assertEqual(self.aluno.altura, 1.70)
        self.assertEqual(self.aluno.peso, 65.0)
        self.assertTrue(self.aluno.status)

    def test_ativar_aluno(self):
        self.aluno.status = True
        self.aluno.save()
        aluno_db = Aluno.objects.get(id=self.aluno.id)
        self.assertTrue(aluno_db.status)

    def test_desativar_aluno(self):
        self.aluno.status = False
        self.aluno.save()
        aluno_db = Aluno.objects.get(id=self.aluno.id)
        self.assertFalse(aluno_db.status)

    @classmethod
    def consultar_por_cpf(cls, cpf):
        return Aluno.objects.filter(cpf=cpf).first()

    def test_consultar_por_cpf(self):
        aluno = AlunoModelTestCase.consultar_por_cpf("98765432100")
        self.assertIsNotNone(aluno)
        self.assertEqual(aluno.id, self.aluno.id)
