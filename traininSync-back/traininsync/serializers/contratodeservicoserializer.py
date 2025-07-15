# pylint: disable=no-member, too-few-public-methods
"""Serializers para ContratoDeServico, incluindo criação e atualização com dados aninhados."""

from rest_framework import serializers

from ..models import Agenda, ContratoDeServico, Servico
from .agendaserializer import AgendaSerializer
from .servicoserializer import ServicoSerializer


class ContratoDeServicoSerializer(serializers.ModelSerializer):
    """Classe do Serializer de Contrato de serviço"""

    horario = AgendaSerializer()
    servico_desejado = ServicoSerializer()

    class Meta:
        """Classe do Serializer de Contrato de serviço"""

        model = ContratoDeServico
        fields = "__all__"

    def create(self, validated_data):
        """Cria um contrato"""
        horario_data = validated_data.pop("horario")
        servico_data = validated_data.pop("servico_desejado")

        # Cria ou reutiliza o objeto Agenda
        horario = Agenda.objects.filter(
            personal=horario_data["personal"],
            dia=horario_data["dia"],
            hora_inicio=horario_data["hora_inicio"],
            hora_fim=horario_data["hora_fim"],
            local=horario_data["local"],
        ).first()

        if not horario:
            horario = Agenda.objects.create(**horario_data)

        # Cria ou reutiliza o objeto Servico
        servico = Servico.objects.filter(
            tipo_de_servico=servico_data["tipo_de_servico"],
            descricao_do_servico=servico_data["descricao_do_servico"],
            valor_do_servico=servico_data["valor_do_servico"],
        ).first()

        if not servico:
            servico = Servico.objects.create(**servico_data)

        return ContratoDeServico.objects.create(
            horario=horario, servico_desejado=servico, **validated_data
        )

    def update(self, instance, validated_data):
        """Atualiza um contrato"""
        horario_data = validated_data.pop("horario", None)
        servico_data = validated_data.pop("servico_desejado", None)

        if horario_data:
            horario = Agenda.objects.filter(
                personal=horario_data["personal"],
                dia=horario_data["dia"],
                hora_inicio=horario_data["hora_inicio"],
                hora_fim=horario_data["hora_fim"],
                local=horario_data["local"],
            ).first()

            if not horario:
                horario = Agenda.objects.create(**horario_data)

            instance.horario = horario

        if servico_data:
            servico = Servico.objects.filter(
                tipo_de_servico=servico_data["tipo_de_servico"],
                descricao_do_servico=servico_data["descricao_do_servico"],
                valor_do_servico=servico_data["valor_do_servico"],
            ).first()

            if not servico:
                servico = Servico.objects.create(**servico_data)

            instance.servico_desejado = servico

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance
