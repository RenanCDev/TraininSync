from rest_framework import serializers

from ..models import RegistroDeProgresso

    
class RegistroDeProgressoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroDeProgresso
        fields = '__all__'
        read_only_fields = ['created_at']