# pylint: disable=no-member, too-few-public-methods
"""Serializer do módulo pessoa aninhado"""
from rest_framework import serializers

from ..models import Pessoa


class PessoaSerializer(serializers.ModelSerializer):
    """Classe do Serializer de Pessoa"""

    class Meta:
        """Classe do Serializer de Pessoa"""

        model = Pessoa
        fields = "__all__"

    def update(self, instance, validated_data):
        """Atualiza os dados de uma pessoa existente"""
        cpf = validated_data.get("cpf")
        email = validated_data.get("email")

        if cpf and cpf != instance.cpf:
            if Pessoa.objects.exclude(id=instance.id).filter(cpf=cpf).exists():
                raise serializers.ValidationError(
                    {"cpf": "Pessoa com este CPF já existe."}
                )

        if email and email != instance.email:
            if Pessoa.objects.exclude(id=instance.id).filter(email=email).exists():
                raise serializers.ValidationError(
                    {"email": "Pessoa com este email já existe."}
                )

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance
