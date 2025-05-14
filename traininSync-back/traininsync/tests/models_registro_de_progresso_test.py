from django.test import TestCase
from datetime import date
from ..models import Pessoa, RegistroDeProgresso, Aluno

class RegistroDeProgressoTestCase(TestCase):
    def setUp(self):
        pessoa = Pessoa.objects.create(
            nome="João Silva",
            cpf="12345678909",
            data_de_nascimento="2000-01-01",
            email="joao@example.com",
            numero_de_celular="11999999999",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro"
        )
        self.aluno = Aluno.objects.create(
            pessoa=pessoa,
            bioimpedancia="BIO123",
            altura=1.80,
            idade=25,
            sexo="M",
            data_do_Exame="2025-01-01",
            hora_do_Exame="10:00:00",
            peso=75.0
        )

    def test_create_registro_de_progresso(self):
        registro = RegistroDeProgresso.objects.create(
            aluno=self.aluno,
            data=date.today(),
            massa_gorda=15.0,
            massa_magra=60.0,
            massa_muscular=50.0,
            hidratacao=60.0,
            densidade_ossea=3.0,
            gordura_visceral=10.0,
            taxa_de_metabolismo_basal=1500.0,
            altura=1.80,
            peso=75.0
        )
        self.assertEqual(str(registro), f"{self.aluno.pessoa.nome} - {registro.data}")