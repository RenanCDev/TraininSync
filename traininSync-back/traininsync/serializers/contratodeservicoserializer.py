# pylint: disable=no-member, too-few-public-methods
"""Serializers para ContratoDeServico, incluindo criação e atualização com dados aninhados."""

from ..models import Agenda, ContratoDeServico, Servico
from .agendaserializer import AgendaSerializer
from .serializers_base import StringNormalizerSerializer
from .servicoserializer import ServicoSerializer


class ContratoDeServicoSerializer(StringNormalizerSerializer):
    """Serializer para ContratoDeServico com nested serializers de Agenda e Servico."""

    servico_desejado = ServicoSerializer()
    horario = AgendaSerializer()

    class Meta:
        model = ContratoDeServico
        fields = "__all__"
        read_only_fields = ["created_at", "updated_at"]

    def create(self, validated_data):
        agenda_dados = validated_data.pop("horario")
        servico_desejado_dados = validated_data.pop("servico_desejado")
        horario = Agenda.objects.create(**agenda_dados)
        servico_desejado = Servico.objects.create(**servico_desejado_dados)
        contrato = ContratoDeServico.objects.create(
            horario=horario, servico_desejado=servico_desejado, **validated_data
        )
        return contrato

    def update(self, instance, validated_data):
        agenda_dados = validated_data.pop("horario", None)
        servico_desejado_dados = validated_data.pop("servico_desejado", None)

        if agenda_dados:
            for attr, value in agenda_dados.items():
                setattr(instance.horario, attr, value)
            instance.horario.save()

        if servico_desejado_dados:
            for attr, value in servico_desejado_dados.items():
                setattr(instance.servico_desejado, attr, value)
            instance.servico_desejado.save()
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
