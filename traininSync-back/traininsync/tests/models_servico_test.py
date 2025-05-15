# pylint: skip-file
"""
Testes para o modelo Servico.
"""

from django.test import TestCase

from ..models import Servico


class ServicoTestCase(TestCase):
    """
    Testes para o modelo Servico.
    """

    def setUp(self):
        """
        Configura os objetos necessários para os testes.
        """
        self.servico = Servico.objects.create(
            tipo_de_servico="Treino Personalizado",
            descricao_do_servico="Plano de treino individualizado",
            valor_do_servico=150.0,
        )

    def test_criar_servico(self):
        """
        Verifica se o serviço foi criado corretamente.
        """
        self.assertEqual(self.servico.tipo_de_servico, "Treino Personalizado")
        self.assertEqual(self.servico.valor_do_servico, 150.0)

    def test_consultar_servico(self):
        """
        Verifica se a consulta por serviço funciona corretamente.
        """
        servico_consultado = Servico.objects.filter(
            tipo_de_servico="Treino Personalizado"
        ).first()
        self.assertIsNotNone(servico_consultado)
        self.assertEqual(servico_consultado.id, self.servico.id)
