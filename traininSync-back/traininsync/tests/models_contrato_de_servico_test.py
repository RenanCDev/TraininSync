from django.test import TestCase
from datetime import date, time
from ..models import (Pessoa, Personal, DadosBancarios, 
                     Aluno, Servico, ContratoDeServico)

class ContratoDeServicoTestCase(TestCase):
    def setUp(self):
        # Create Pessoa for Personal
        pessoa_personal = Pessoa.objects.create(
            nome='Personal Trainer',
            cpf='11122233344',
            data_de_nascimento='1990-01-01',
            email='personal@example.com',
            numero_de_celular='11987651234',
            sexo='M',
            etnia='branca',
            estado_civil='solteiro'
        )
        
        # Create Pessoa for Aluno
        pessoa_aluno = Pessoa.objects.create(
            nome='Aluno Teste',
            cpf='22233344455',
            data_de_nascimento='2000-01-01',
            email='aluno@example.com',
            numero_de_celular='11987654321',
            sexo='M',
            etnia='branca',
            estado_civil='solteiro'
        )
        
        # Create DadosBancarios
        dados_bancarios = DadosBancarios.objects.create(
            numero_conta='123456',
            agencia='1234'
        )
        
        # Create Personal - using the Pessoa instance directly
        self.personal = Personal(
            pessoa_ptr=pessoa_personal,
            cref='CREF123',
            especialidades='Musculação',
            experiencia_profissional='5 anos',
            dados_bancarios=dados_bancarios,
            horarios_disponiveis=10.0,
            locais_disponiveis='Academia Central'
        )
        # Copy all attributes from pessoa to personal
        self.personal.__dict__.update(pessoa_personal.__dict__)
        self.personal.save()
        
        # Create Aluno
        self.aluno = Aluno.objects.create(
            pessoa=pessoa_aluno,
            bioimpedancia='BIO123',
            altura=1.75,
            peso=70.0,
            idade=25,
            sexo='M',
            data_do_Exame='2023-01-01',
            hora_do_Exame='10:00:00'
        )
        
        # Create Servico
        self.servico = Servico.objects.create(
            tipo_de_servico='Personal Trainer',
            descricao_do_servico='Treinamento personalizado',
            valr_do_servico=200.0
        )
        
        # Create Contrato
        self.contrato = ContratoDeServico.objects.create(
            personal=self.personal,
            aluno=self.aluno,
            servico_desejado=self.servico,
            localidade_desejada="Academia Central"
        )

    def test_create_contrato(self):
        # Refresh to ensure all fields are loaded
        self.personal.refresh_from_db()
        
        # Test the fields
        self.assertEqual(self.personal.nome, 'Personal Trainer')  # Now this should work
        self.assertEqual(self.contrato.aluno.pessoa.nome, 'Aluno Teste')
        self.assertEqual(self.contrato.servico_desejado.tipo_de_servico, 'Personal Trainer')