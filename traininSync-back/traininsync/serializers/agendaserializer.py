from rest_framework import serializers

from ..models import Agenda
    
class AgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = '__all__'

    def validate(self, data):
        if data['hora_inicio'] >= data['hora_fim']:
            raise serializers.ValidationError("Hora de início deve ser menor que a hora de fim.")
        return data