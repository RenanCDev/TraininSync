"""
Módulo de inicialização dos testes para os modelos da aplicação TraininSync.

Este módulo importa e agrupa os casos de teste dos modelos, incluindo:
- Agenda
- Aluno
- Contrato de Serviço
- Dados Bancários
- Pagamento
- Personal
- Pessoa
- Registro de Progresso
- Serviço
"""

from .models_agenda_test import AgendaTestCase
from .models_aluno_test import AlunoModelTestCase
from .models_contrato_de_servico_test import ContratoDeServicoTestCase
from .models_dados_bancarios_test import DadosBancariosTestCase
from .models_pagamento_test import PagamentoModelTestCase
from .models_personal_test import PersonalModelTestCase
from .models_pessoa_test import PessoaTestCase
from .models_registro_de_progresso_test import RegistroDeProgressoTestCase
from .models_servico_test import ServicoTestCase
