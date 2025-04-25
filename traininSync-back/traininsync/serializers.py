from rest_framework import serializers

from .models import Personal, DadosBancarios, Pessoa, Aluno, Servicos


class DadosBancariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosBancarios
        fields = '__all__'

class PessoaSerializer(serializers.ModelSerializer):
     class Meta:
         model = Pessoa
         fields = '__all__'

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

class AlunoSerializer(serializers.ModelSerializer):
    pessoa = PessoaSerializer()

    class Meta:
        model = Aluno
        fields = '__all__'

    def create(self, validated_data):
        pessoa_data = validated_data.pop('pessoa')
        pessoa = Pessoa.objects.create(**pessoa_data)
        aluno = Aluno.objects.create(pessoa=pessoa, **validated_data)
        return aluno

    def update(self, instance, validated_data):
        pessoa_data = validated_data.pop('pessoa', None)

        if pessoa_data:
            for attr, value in pessoa_data.items():
                setattr(instance.pessoa, attr, value)
            instance.pessoa.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
    
    from rest_framework import serializers
from .models import Servicos

class ServicosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicos
        fields = '__all__'
        extra_kwargs = {
            'tipoDeServico': {
                'required': True,
                'error_messages': {
                    'blank': 'O tipo de serviço não pode estar vazio',
                    'null': 'O tipo de serviço é obrigatório'
                }
            },
            'descricaoDoServico': {
                'required': True,
                'error_messages': {
                    'blank': 'A descrição do serviço não pode estar vazia',
                    'null': 'A descrição do serviço é obrigatória'
                }
            },
            'valorDoServico': {
                'required': True,
                'min_value': 0.01,
                'error_messages': {
                    'invalid': 'O valor deve ser um número positivo',
                    'min_value': 'O valor deve ser maior que zero'
                }
            }
        }

    def validate_tipoDeServico(self, value):
        """
        Verifica se o tipo de serviço já existe (case insensitive)
        """
        if Servicos.objects.filter(tipoDeServico__iexact=value).exists():
            raise serializers.ValidationError("Este tipo de serviço já está cadastrado")
        return value

    def validate_valorDoServico(self, value):
        """
        Validação adicional para o valor do serviço
        """
        if value <= 0:
            raise serializers.ValidationError("O valor do serviço deve ser positivo")
        return round(value, 2)