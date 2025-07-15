# pylint: disable=no-member, too-few-public-methods, arguments-renamed
"""Serializer para o modelo Agenda, incluindo validação de horários."""

from rest_framework import serializers

from ..models import Agenda, Personal


class AgendaSerializer(serializers.ModelSerializer):
    """Serializer para Agenda com validação customizada de hora_inicio e hora_fim."""

    personal = serializers.PrimaryKeyRelatedField(queryset=Personal.objects.all())

    class Meta:
        model = Agenda
        fields = "__all__"

    def validate(self, data):
        if data["hora_inicio"] >= data["hora_fim"]:
            raise serializers.ValidationError(
                "Hora de início deve ser menor que a hora de fim."
            )
        return data
