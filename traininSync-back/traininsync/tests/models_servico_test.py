from django.test import TestCase
from ..models import Servico

class ServicoTestCase(TestCase):
    def test_create_servico(self):
        servico = Servico.objects.create(
            tipo_de_servico='Personal Trainer', 
            descricao_do_servico='Treinamento personalizado', 
            valr_do_servico=200.0
        )
        self.assertEqual(servico.tipo_de_servico, 'Personal Trainer')
        self.assertEqual(servico.descricao_do_servico, 'Treinamento personalizado')
        self.assertEqual(float(servico.valr_do_servico), 200.0)
