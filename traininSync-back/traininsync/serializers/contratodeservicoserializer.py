from rest_framework import serializers

from ..models import ContratoDeServico

class ContratoDeServicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContratoDeServico
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']