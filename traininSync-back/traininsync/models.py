from django.db import models
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError
import re

def validar_cpf(value):
    cpf = re.sub(r'\D', '', str(value))

    if len(cpf) != 11 or not cpf.isdigit():
        raise ValidationError('CPF deve conter exatamente 11 dígitos numéricos.')

    if cpf == cpf[0] * 11:
        raise ValidationError('CPF inválido!')

    def calcular_digito(cpf_parcial):
        peso = len(cpf_parcial) + 1
        soma = sum(int(digito) * (peso - idx) for idx, digito in enumerate(cpf_parcial))
        resto = soma % 11
        return '0' if resto < 2 else str(11 - resto)

    # Calcular dígitos verificadores
    d1 = calcular_digito(cpf[:9])
    d2 = calcular_digito(cpf[:9] + d1)

    if cpf[-2:] != d1 + d2:
        raise ValidationError('CPF inválido.')

celular_validator = RegexValidator(
    regex=r'^\d{11}$',
    message="Número de celular deve conter 11 dígitos numéricos (ex: DDD + 9 dígitos)"
)

class Pessoa(models.Model):
    SEXO_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Feminino'),
        ('O', 'Outro'),
        ('N', 'Prefiro não dizer'),
    ]

    ESTADO_CIVIL_CHOICES = [
        ('solteiro', 'Solteiro(a)'),
        ('casado', 'Casado(a)'),
        ('divorciado', 'Divorciado(a)'),
        ('viuvo', 'Viúvo(a)'),
        ('uniao_estavel', 'União Estável'),
    ]

    ETNIA_CHOICES = [
        ('branca', 'Branca'),
        ('preta', 'Preta'),
        ('parda', 'Parda'),
        ('amarela', 'Amarela'),
        ('indigena', 'Indígena'),
        ('nao_informado', 'Prefiro não dizer'),
    ]

    nome = models.CharField(max_length=255)
    cpf = models.CharField(unique=True, validators=[validar_cpf])
    data_de_nascimento = models.DateField()
    email = models.EmailField(unique=True)
    numero_de_celular = models.CharField(max_length=11, validators=[celular_validator])
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES)
    nome_social = models.CharField(max_length=255, blank=True, null=True)
    etnia = models.CharField(max_length=20, choices=ETNIA_CHOICES)
    estado_civil = models.CharField(max_length=20, choices=ESTADO_CIVIL_CHOICES)

    def __str__(self):
        return self.nome

class DadosBancarios(models.Model):
    numero_conta = models.BigIntegerField()
    agencia = models.BigIntegerField()

    def __str__(self):
        return f"Conta: {self.numero_conta} - Agência: {self.agencia}"

class Personal(Pessoa):
    status = models.BooleanField(default=True)
    cref = models.CharField(max_length=20, unique=True)
    especialidades = models.TextField()
    experiencia_profissional = models.TextField()
    dados_bancarios = models.OneToOneField(DadosBancarios, on_delete=models.CASCADE, related_name='personal')
    horarios_disponiveis = models.FloatField()
    locais_disponiveis = models.TextField()

    def __str__(self):
        return f"{self.nome} (CREF: {self.cref})"

    def desativarPersonal(self):
        self.status = False
        self.save()

    def reativarPersonal(self):
        self.status = True
        self.save()

    @classmethod
    def consultar_por_cpf(cls, cpf):
        return cls.objects.filter(cpf=cpf).first()
