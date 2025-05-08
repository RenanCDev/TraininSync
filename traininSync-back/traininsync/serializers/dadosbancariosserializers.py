from rest_framework import serializers

from ..models import DadosBancarios

class DadosBancariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosBancarios
        fields = '__all__'