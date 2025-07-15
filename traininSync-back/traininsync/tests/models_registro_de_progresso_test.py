# pylint: skip-file
"""
Testes para o modelo Registro de Progresso.
"""

from datetime import date, time

from django.test import TestCase

from ..models import Aluno, RegistroDeProgresso


class RegistroDeProgressoTestCase(TestCase):
    """
    Testes para o modelo Registro de Progresso.
    """

    def setUp(self):
        """
        Configura os objetos necessários para os testes.
        """
        self.aluno = Aluno.objects.create(
            nome="Carlos Souza",
            cpf="12345678909",
            data_de_nascimento=date(1985, 5, 20),
            email="carlos@example.com",
            numero_de_celular="11988888888",
            sexo="M",
            etnia="branca",
            estado_civil="casado",
            bioimpedancia="BIO1234567890",
            altura=1.75,
            data_do_exame=date.today(),
            hora_do_exame=time(8, 0),
            peso=75.0,
            status=True,
        )

        self.registro = RegistroDeProgresso.objects.create(
            aluno=self.aluno,
            data=date.today(),
            altura=1.75,
            peso=75.0,
        )

    def test_criar_registro(self):
        """
        Verifica se o registro de progresso foi criado corretamente.
        """
        self.assertEqual(self.registro.aluno.nome, "Carlos Souza")
        self.assertEqual(self.registro.altura, 1.75)
        self.assertEqual(self.registro.peso, 75.0)

    def test_excluir_registro(self):
        """
        Verifica se o registro pode ser excluído corretamente.
        """
        self.registro.delete()
        registro_db = RegistroDeProgresso.objects.filter(id=self.registro.id).first()
        self.assertIsNone(registro_db)

    def test_criar_novo_registro(self):
        """
        Verifica se é possível criar um novo registro de progresso.
        """
        novo_registro = RegistroDeProgresso.objects.create(
            aluno=self.aluno,
            data=date.today(),
            altura=1.80,
            peso=80.0,
        )
        self.assertIsNotNone(novo_registro)
        self.assertEqual(novo_registro.altura, 1.80)
        self.assertEqual(novo_registro.peso, 80.0)

    @classmethod
    def consultar_por_aluno(cls, aluno_id):
        """
        Consulta um registro de progresso pelo ID do aluno.
        """
        return RegistroDeProgresso.objects.filter(aluno__id=aluno_id).first()

    def test_consultar_por_aluno(self):
        """
        Verifica se a consulta por aluno funciona corretamente.
        """
        registro = self.consultar_por_aluno(self.aluno.id)
        self.assertIsNotNone(registro)
        self.assertEqual(registro.id, self.registro.id)
