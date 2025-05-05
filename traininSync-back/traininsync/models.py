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
    cpf = models.CharField(max_length=11, unique=True, validators=[validar_cpf])
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
    numero_conta = models.CharField(max_length=20)
    agencia = models.CharField(max_length=10)

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
    
class Aluno(models.Model):
    pessoa = models.OneToOneField(Pessoa, on_delete=models.CASCADE, related_name='aluno')
    status = models.BooleanField(default=True)
    bioimpedancia = models.CharField(max_length=15, unique=True)
    altura = models.FloatField()
    idade = models.IntegerField()
    sexo = models.CharField(max_length=50)
    data_do_Exame = models.DateField()
    hora_do_Exame = models.TimeField()
    agua_corporal_total = models.FloatField(null=True, blank=True)
    proteinas = models.FloatField(null=True, blank=True)
    minerais = models.FloatField(null=True, blank=True)
    massa_gordura = models.FloatField(null=True, blank=True)
    peso = models.FloatField()
    massa_muscular_esqueletica = models.FloatField(null=True, blank=True)
    imc = models.FloatField(null=True, blank=True)
    pgc = models.FloatField(null=True, blank=True)
    taxa_metabolica_basal = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"{self.pessoa.nome} - Bioimpedância: {self.bioimpedancia}"

    def desativarAluno(self):
        self.status = False
        self.save()

    def reativarAluno(self):
        self.status = True

        self.save()

    @classmethod
    def consultar_por_cpf(cls, cpf):
        return cls.objects.filter(pessoa__cpf=cpf).first()
    

class Servico(models.Model):
    tipo_de_servico = models.CharField(max_length=150, unique=True, null=False)
    descricao_do_servico = models.TextField(null=False)
    valr_do_servico = models.FloatField(null=False)

    def __str__(self):
        return f"{self.tipoDeServico} - R${self.valorDoServico:.2f}"

    @classmethod
    def servicos_ativos(cls):
        return cls.objects.all()
    
    

class Agenda(models.Model):
    personal = models.ForeignKey('Personal', on_delete=models.CASCADE, related_name='agendas')
    dia = models.DateField()
    hora_inicio = models.TimeField()
    hora_fim = models.TimeField()
    local = models.CharField(max_length=150)
    disponivel = models.BooleanField(default=True)
    reserva = models.OneToOneField(
        'ContratoDeServico',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='agenda_reservada'
    )

    class Meta:
        unique_together = ('personal', 'dia', 'hora_inicio')
        ordering = ['dia', 'hora_inicio']

    def clean(self):
        if self.hora_inicio >= self.hora_fim:
            raise ValidationError("Hora de início deve ser menor que a hora de fim.")

    def __str__(self):
        return f"{self.personal.nome} - {self.dia} ({self.hora_inicio} às {self.hora_fim})"


class ContratoDeServico(models.Model):
    personal = models.ForeignKey(Personal, on_delete=models.CASCADE, related_name='contratos')
    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE, related_name='contratos')
    horario = models.ForeignKey(Agenda, on_delete=models.SET_NULL, null=True, blank=True, related_name='contratos')
    servico_desejado = models.ForeignKey(Servico, on_delete=models.CASCADE, related_name='contratos')
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    localidade_desejada = models.CharField(max_length=150)

    def __str__(self):
        return f"Contrato: {self.aluno.pessoa.nome} ⇄ {self.personal.nome} | {self.servicoDesejado}"

    def suspender(self):
        self.status = False
        self.save()

    def reativar(self):
        self.status = True
        self.save()

class RegistroDeProgresso(models.Model):
    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE, related_name='registros')
    data = models.DateField()
    massa_gorda = models.FloatField(null=True, blank=True)
    massa_magra = models.FloatField(null=True, blank=True)
    massa_muscular = models.FloatField(null=True, blank=True)
    hidratacao = models.FloatField(null=True, blank=True)
    densidade_ossea = models.FloatField(null=True, blank=True)
    gordura_visceral = models.FloatField(null=True, blank=True)
    taxa_de_metabolismo_basal = models.FloatField(null=True, blank=True)
    altura = models.FloatField()
    peso = models.FloatField()
    reated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.aluno.pessoa.nome} - {self.data}"

