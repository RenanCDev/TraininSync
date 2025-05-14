from django.test import TestCase
from datetime import date, time
from ..models import (
    Pessoa,
    DadosBancarios,
    Personal,
    Agenda,
    ValidationError
)

class AgendaTestCase(TestCase):
    def setUp(self):
        pessoa = Pessoa.objects.create(
            nome="Carlos Silva",
            cpf="98765432100",
            data_de_nascimento="1985-05-15",
            email="carlos@example.com",
            numero_de_celular="11988888888",
            sexo="M",
            etnia="branca",
            estado_civil="solteiro"
        )
        dados_bancarios = DadosBancarios.objects.create(
            numero_conta="123456",
            agencia="1234"
        )
        self.personal = Personal.objects.create(
            pessoa_ptr=pessoa,
            cref="CREF123",
            especialidades="Musculação",
            experiencia_profissional="10 anos de experiência",
            dados_bancarios=dados_bancarios,
            horarios_disponiveis=10.0,
            locais_disponiveis="Academia XYZ"
        )

    def test_create_agenda(self):
        agenda = Agenda.objects.create(
            personal=self.personal,
            dia=date.today(),
            hora_inicio=time(10, 0),
            hora_fim=time(11, 0),
            local="Academia XYZ"
        )
        self.assertEqual(str(agenda), f"{self.personal.nome} - {agenda.dia} ({agenda.hora_inicio} às {agenda.hora_fim})")

    def test_invalid_hora_inicio_fim(self):
        agenda = Agenda(
            personal=self.personal,
            dia=date.today(),
            hora_inicio=time(11, 0),
            hora_fim=time(10, 0),
            local="Academia XYZ"
        )
        with self.assertRaises(ValidationError):
            agenda.full_clean()