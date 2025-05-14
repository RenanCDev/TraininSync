from django.test import TestCase
from django.core.exceptions import ValidationError
from ..models import Pessoa

class PessoaTestCase(TestCase):
    def setUp(self):
        self.valid_data = {
            'nome': 'Teste Pessoa',
            'data_de_nascimento': '2000-01-01',
            'cpf': '52998224725',  # Valid CPF
            'email': 'teste@example.com',
            'numero_de_celular': '11987654321',
            'sexo': 'M',
            'etnia': 'branca',
            'estado_civil': 'solteiro'
        }
        self.pessoa = Pessoa.objects.create(**self.valid_data)

    def test_valid_pessoa_creation(self):
        self.assertEqual(self.pessoa.nome, 'Teste Pessoa')
        self.assertEqual(self.pessoa.cpf, '52998224725')

    def test_invalid_cpf_short(self):
        """Test CPF with less than 11 digits"""
        invalid_data = self.valid_data.copy()
        invalid_data['cpf'] = '123'
        
        with self.assertRaises(ValidationError):
            pessoa = Pessoa(**invalid_data)
            pessoa.full_clean()  # This triggers model validation

    def test_invalid_cpf_non_digits(self):
        """Test CPF with non-digit characters"""
        invalid_data = self.valid_data.copy()
        invalid_data['cpf'] = '5299822472a'  # Contains letter
        
        with self.assertRaises(ValidationError):
            pessoa = Pessoa(**invalid_data)
            pessoa.full_clean()

    def test_invalid_cpf_repeated(self):
        """Test CPF with all digits the same"""
        invalid_data = self.valid_data.copy()
        invalid_data['cpf'] = '11111111111'
        
        with self.assertRaises(ValidationError):
            pessoa = Pessoa(**invalid_data)
            pessoa.full_clean()