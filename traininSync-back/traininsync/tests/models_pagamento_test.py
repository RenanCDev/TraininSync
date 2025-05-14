from django.test import TestCase
from datetime import date, time
from ..models import (Pessoa, Personal, DadosBancarios, 
                     Aluno, Servico, ContratoDeServico, Pagamento)

class PagamentoTestCase(TestCase):
    def setUp(self):
        # Create Pessoa for Personal
        pessoa_personal = Pessoa.objects.create(
            nome='Personal Trainer',
            cpf='55566677788',
            data_de_nascimento='1990-01-01',
            email='personal@example.com',
            numero_de_celular='11987654321',
            sexo='F',
            etnia='amarela',
            estado_civil='solteiro'
        )
        
        # Create Pessoa for Aluno
        pessoa_aluno = Pessoa.objects.create(
            nome='Aluno Pagamento',
            cpf='66677788899',
            data_de_nascimento='2000-01-01',
            email='aluno@example.com',
            numero_de_celular='11987651234',
            sexo='M',
            etnia='branca',
            estado_civil='solteiro'
        )
        
        # Create DadosBancarios
        dados_bancarios = DadosBancarios.objects.create(
            numero_conta='654321',
            agencia='4321'
        )
        
        # Create Personal
        self.personal = Personal.objects.create(
            pessoa_ptr=pessoa_personal,
            cref='CREF456',
            especialidades='Pilates',
            experiencia_profissional='3 anos',
            dados_bancarios=dados_bancarios,
            horarios_disponiveis=8.0,
            locais_disponiveis='Studio Fitness'
        )
        
        # Create Aluno
        self.aluno = Aluno.objects.create(
            pessoa=pessoa_aluno,
            bioimpedancia='BIO456',
            altura=1.65,
            peso=60.0,
            idade=22,
            sexo='F',
            data_do_Exame='2023-01-01',
            hora_do_Exame='14:00:00'
        )
        
        # Create Servico
        servico = Servico.objects.create(
            tipo_de_servico='Pilates',
            descricao_do_servico='Aulas de Pilates',
            valr_do_servico=150.0
        )
        
        # Create Contrato
        self.contrato = ContratoDeServico.objects.create(
            personal=self.personal,
            aluno=self.aluno,
            servico_desejado=servico,
            localidade_desejada='Studio Fitness'
        )
        
        # Create Pagamento
        self.pagamento = Pagamento.objects.create(
            aluno=self.aluno,
            contrato=self.contrato,
            valor=500.00,
            descricao='Mensalidade Janeiro/2023'
        )

    def test_create_pagamento(self):
        self.assertEqual(float(self.pagamento.valor), 500.00)
        self.assertEqual(self.pagamento.aluno.pessoa.nome, 'Aluno Pagamento')
        self.assertEqual(self.pagamento.contrato.servico_desejado.tipo_de_servico, 'Pilates')