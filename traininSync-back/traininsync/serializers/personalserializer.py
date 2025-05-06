from rest_framework import serializers

from .dadosbancariosserializers import DadosBancariosSerializer

from ..models import Personal, DadosBancarios

class PersonalSerializer(serializers.ModelSerializer):
    dados_bancarios = DadosBancariosSerializer()
    class Meta:
        model = Personal
        fields = '__all__'

    def create(self, validated_data):
        dados_bancarios_data = validated_data.pop('dados_bancarios')
        dados_bancarios = DadosBancarios.objects.create(**dados_bancarios_data)
        personal = Personal.objects.create(dados_bancarios=dados_bancarios, **validated_data)
        return personal

    def update(self, instance, validated_data):
        dados_bancarios_data = validated_data.pop('dados_bancarios', None)

        if dados_bancarios_data:
            for attr, value in dados_bancarios_data.items():
                setattr(instance.dados_bancarios, attr, value)
            instance.dados_bancarios.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance