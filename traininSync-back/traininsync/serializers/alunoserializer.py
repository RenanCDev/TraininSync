# pylint: skip-file
from rest_framework import serializers

from ..models import Aluno, Pessoa
from .pessoaserializers import PessoaSerializer


class AlunoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Aluno
        fields = "__all__"
