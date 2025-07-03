# pylint: disable=no-member, too-few-public-methods

"""Arquivo Models para modelagem do banco de dados"""

import re
from datetime import date

from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from django.db import models


def validar_cpf(value):
    """Valida o CPF conforme regras da Receita Federal."""
    cpf = re.sub(r"\D", "", str(value))

    if len(cpf) != 11 or not cpf.isdigit():
        raise ValidationError("CPF deve conter exatamente 11 dígitos numéricos.")

    if cpf == cpf[0] * 11:
        raise ValidationError("CPF inválido!")

    def calcular_digito(cpf_parcial):
        peso = len(cpf_parcial) + 1
        soma = sum(int(digito) * (peso - idx) for idx, digito in enumerate(cpf_parcial))
        resto = soma % 11
        return "0" if resto < 2 else str(11 - resto)

    d1 = calcular_digito(cpf[:9])
    d2 = calcular_digito(cpf[:9] + d1)

    if cpf[-2:] != d1 + d2:
        raise ValidationError("CPF inválido.")


celular_validator = RegexValidator(
    regex=r"^\d{11}$",
    message="Número de celular deve conter 11 dígitos numéricos (ex: DDD + 9 dígitos)",
)


class Pessoa(models.Model):
    """Representa uma pessoa genérica."""

    SEXO_CHOICES = [
        ("M", "Masculino"),
        ("F", "Feminino"),
        ("O", "Outro"),
        ("N", "Prefiro não dizer"),
    ]

    ESTADO_CIVIL_CHOICES = [
        ("solteiro", "Solteiro(a)"),
        ("casado", "Casado(a)"),
        ("divorciado", "Divorciado(a)"),
        ("viuvo", "Viúvo(a)"),
        ("uniao_estavel", "União Estável"),
        ("nao_informado", "Prefiro não dizer"),
    ]

    ETNIA_CHOICES = [
        ("branca", "Branca"),
        ("preta", "Preta"),
        ("parda", "Parda"),
        ("amarela", "Amarela"),
        ("indigena", "Indígena"),
        ("nao_informado", "Prefiro não dizer"),
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

    @property
    def idade(self):
        """Calcula a idade com base na data de nascimento."""
        hoje = date.today()
        nascimento = self.data_de_nascimento  # type: ignore[attr-defined]
        return (
            hoje.year
            - nascimento.year
            - ((hoje.month, hoje.day) < (nascimento.month, nascimento.day))
        )

    def __str__(self):
        return str(self.nome)


class DadosBancarios(models.Model):
    """Representa os dados bancários vinculados a um Personal."""

    numero_conta = models.CharField(max_length=20)
    agencia = models.CharField(max_length=10)

    def __str__(self):
        return f"Conta: {self.numero_conta} - Agência: {self.agencia}"


class Personal(Pessoa):
    """Modelo para profissionais de educação física."""

    status = models.BooleanField(default=True)
    cref = models.CharField(max_length=20, unique=True)
    especialidades = models.TextField(null=True, blank=True)
    experiencia_profissional = models.TextField(null=True, blank=True)
    dados_bancarios = models.OneToOneField(
        DadosBancarios, on_delete=models.CASCADE, related_name="personal"
    )
    horarios_disponiveis = models.FloatField()
    locais_disponiveis = models.TextField()

    def __str__(self):
        return f"{self.nome} (CREF: {self.cref})"

    def desativar_personal(self):
        """Desativa o personal."""
        self.status = False
        self.save()

    def reativar_personal(self):
        """Reativa o personal."""
        self.status = True
        self.save()

    @classmethod
    def consultar_por_cpf(cls, cpf):
        """Consulta um personal pelo CPF."""
        return cls.objects.filter(cpf=cpf).first()


class Aluno(Pessoa):
    """Modelo que representa um aluno com dados de exame."""

    status = models.BooleanField(default=True)
    bioimpedancia = models.CharField(max_length=100, null=True, blank=True)
    altura = models.FloatField()
    data_do_exame = models.DateField(null=True, blank=True)
    hora_do_exame = models.TimeField(null=True, blank=True)
    agua_corporal_total = models.FloatField(null=True, blank=True)
    proteinas = models.FloatField(null=True, blank=True)
    minerais = models.FloatField(null=True, blank=True)
    gordura_corporal = models.FloatField(null=True, blank=True)
    peso = models.FloatField()
    massa_muscular_esqueletica = models.FloatField(null=True, blank=True)
    imc = models.FloatField(null=True, blank=True)
    taxa_metabolica_basal = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"{self.pessoa.nome} - Bioimpedância: {self.bioimpedancia}"

    def delete(self, *args, **kwargs):
        """Deleta a pessoa associada ao aluno."""

        super().delete(*args, **kwargs)

    def desativar_aluno(self):
        """Desativa o aluno."""
        self.status = False
        self.save()

    def reativar_aluno(self):
        """Reativa o aluno."""
        self.status = True
        self.save()

    @classmethod
    def consultar_por_cpf(cls, cpf):
        """Consulta um aluno pelo CPF."""
        return cls.objects.filter(pessoa__cpf=cpf).first()


class Servico(models.Model):
    """Serviços prestados pelos profissionais."""

    tipo_de_servico = models.CharField(max_length=150, null=False)
    descricao_do_servico = models.TextField(null=False)
    valor_do_servico = models.FloatField(null=False)

    def __str__(self):
        return f"{self.tipo_de_servico} - R${self.valor_do_servico:.2f}"

    @classmethod
    def servicos_ativos(cls):
        """Retorna todos os serviços cadastrados."""
        return cls.objects.all()


class Agenda(models.Model):
    """Agenda de horários de um personal."""

    personal = models.ForeignKey(
        Personal, on_delete=models.CASCADE, related_name="agendas"
    )
    dia = models.DateField()
    hora_inicio = models.TimeField()
    hora_fim = models.TimeField()
    local = models.CharField(max_length=150)
    disponivel = models.BooleanField(default=True)

    class Meta:
        """Agenda de horários de um personal."""

        unique_together = ("personal", "dia", "hora_inicio")
        ordering = ["dia", "hora_inicio"]

    def clean(self):
        """Verificação"""

        if self.hora_inicio >= self.hora_fim:
            raise ValidationError("Hora de início deve ser menor que a hora de fim.")

    def __str__(self):
        return (
            f"{self.personal.nome} - {self.dia} "
            f"({self.hora_inicio} às {self.hora_fim})"
        )


class ContratoDeServico(models.Model):
    """Contrato entre personal e aluno."""

    personal = models.ForeignKey(
        Personal, on_delete=models.CASCADE, related_name="contratos"
    )

    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE, related_name="contratos")

    horario = models.OneToOneField(
        Agenda,
        on_delete=models.CASCADE,
        related_name="contratos",
    )

    servico_desejado = models.ForeignKey(
        Servico, on_delete=models.CASCADE, related_name="contratos"
    )
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    localidade_desejada = models.CharField(max_length=150)

    def __str__(self):
        return (
            f"Contrato: {self.aluno.pessoa.nome} ⇄ {self.personal.nome} | "
            f"{self.servico_desejado}"
        )

    def suspender(self):
        """Suspende o contrato."""
        self.status = False
        self.save()

    def reativar(self):
        """Reativa o contrato."""

        self.status = True
        self.save()


class RegistroDeProgresso(models.Model):
    """Modulo do Resgistro de Progresso de um aluno."""

    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE, related_name="registros")
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
    imc = models.FloatField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.aluno.pessoa.nome} - {self.data}"


class Pagamento(models.Model):
    """Pagamentos feitos pelo aluno para um contrato de serviço."""

    aluno = models.ForeignKey(
        Aluno, on_delete=models.CASCADE, related_name="pagamentos"
    )
    contrato = models.ForeignKey(
        ContratoDeServico, on_delete=models.CASCADE, related_name="pagamentos"
    )
    valor = models.DecimalField(max_digits=8, decimal_places=2)
    data_pagamento = models.DateField(auto_now_add=True)
    descricao = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (
            f"Pagamento de {self.aluno.pessoa.nome} referente ao contrato "
            f"{self.contrato} na data {self.data_pagamento} - R$ {self.valor}"
        )
