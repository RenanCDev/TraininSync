from rest_framework import serializers

from ..models import Pagamento

class PagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pagamento
        fields = '__all__'
        read_only_fields = ['data_pagamento', 'created_at']