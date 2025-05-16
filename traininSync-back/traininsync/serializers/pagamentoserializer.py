from rest_framework import serializers

from ..models import Pagamento
from .serializers_base import StringNormalizerSerializer

class PagamentoSerializer(StringNormalizerSerializer):
    class Meta:
        model = Pagamento
        fields = '__all__'
        read_only_fields = ['data_pagamento', 'created_at']