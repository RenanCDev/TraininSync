from django.test import TestCase
from ..models import DadosBancarios

class DadosBancariosTestCase(TestCase):
    def test_create_dados_bancarios(self):
        dados = DadosBancarios.objects.create(numero_conta='123456', agencia='1234')
        self.assertEqual(dados.numero_conta, '123456')
        self.assertEqual(dados.agencia, '1234')