from django.test import TestCase
from datetime import date, time
from ..models import Aluno, Pessoa

class AlunoTestCase(TestCase):
    def setUp(self):
        pessoa = Pessoa.objects.create(
            nome='Teste Aluno',
            data_de_nascimento='2000-01-01',
            cpf='12345678902',
            email='aluno@example.com',
            numero_de_celular='11987654322',
            sexo='M',
            etnia='branca',
            estado_civil='solteiro'
        )
        self.aluno = Aluno.objects.create(
            pessoa=pessoa,
            altura=1.70,
            peso=70.0,
            idade=25,
            bioimpedancia='BIO123',
            sexo='M',
            data_do_Exame='2023-01-01',
            hora_do_Exame='10:00:00'
        )

    def test_aluno_creation(self):
        self.assertEqual(self.aluno.pessoa.nome, 'Teste Aluno')
        self.assertEqual(self.aluno.altura, 1.70)
        self.assertEqual(self.aluno.idade, 25)