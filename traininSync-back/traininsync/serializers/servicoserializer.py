from rest_framework import serializers

from ..models import Servico

class ServicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servico
        fields = '__all__'

    def create(self, validated_data):
        servico = Servico.objects.create(**validated_data)
        return servico

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance