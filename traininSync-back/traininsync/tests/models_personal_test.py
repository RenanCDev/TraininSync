from django.test import TestCase
from ..models import Personal, Pessoa, DadosBancarios

class PersonalTestCase(TestCase):
    def setUp(self):
        # First create DadosBancarios
        dados_bancarios = DadosBancarios.objects.create(
            numero_conta='987654',
            agencia='5678'
        )
        
        # Create Personal with all fields at once
        self.personal = Personal.objects.create(
            nome='Teste Personal',
            data_de_nascimento='1980-01-01',
            cpf='12312312312',
            email='personal@example.com',
            numero_de_celular='11987651234',
            sexo='M',
            etnia='preta',
            estado_civil='casado',
            cref='CREF789',
            especialidades='Crossfit',
            experiencia_profissional='7 anos',
            dados_bancarios=dados_bancarios,
            horarios_disponiveis=12.0,
            locais_disponiveis='Box Crossfit'
        )

    def test_personal_creation(self):
        # Refresh to ensure all fields are loaded
        self.personal.refresh_from_db()
        
        # Test the fields
        self.assertEqual(self.personal.nome, 'Teste Personal')
        self.assertEqual(self.personal.cref, 'CREF789')
        self.assertEqual(self.personal.dados_bancarios.numero_conta, '987654')