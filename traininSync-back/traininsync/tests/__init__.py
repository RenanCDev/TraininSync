"""
Módulo de inicialização dos testes para a aplicação TraininSync.

Organização:
1. Testes de Models
2. Testes de Viewsets
"""

# =============================================
# 1. TESTES DE MODELS (TestCases dos modelos)
# =============================================

# Modelos relacionados a agendamento
from .models_agenda_test import AgendaTestCase
from .models_aluno_test import AlunoModelTestCase
from .models_contrato_de_servico_test import ContratoDeServicoTestCase

# Modelos financeiros
from .models_dados_bancarios_test import DadosBancariosTestCase
from .models_pagamento_test import PagamentoModelTestCase
from .models_personal_test import PersonalModelTestCase

# Modelos principais
from .models_pessoa_test import PessoaTestCase

# Modelos de acompanhamento
from .models_registro_de_progresso_test import RegistroDeProgressoTestCase
from .models_servico_test import ServicoTestCase

# Viewsets de agendamento
from .views_agenda_test import AgendaViewSetTestCase
from .views_aluno_test import AlunoViewSetTestCase
from .views_contrato_de_servico_test import ContratoDeServicoViewSetTestCase

# Viewsets financeiros
from .views_pagamento_test import PagamentoViewSetTestCase

# Viewsets principais
from .views_personal_test import PersonalViewSetTestCase

# Viewsets de acompanhamento
from .views_registro_de_progresso_test import RegistroDeProgressoViewSetTestCase
from .views_servico_test import ServicoViewSetTestCase

# =============================================
# 2. TESTES DE VIEWSETS (Testes das APIs)
# =============================================
