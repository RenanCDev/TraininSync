from rest_framework import serializers

class StringNormalizerSerializer(serializers.ModelSerializer):
    """
    Serializador base que:
    - Converte todos os campos numéricos e booleanos recebidos como string para seus tipos reais
    - Retorna todos os dados como string na resposta (exceto datas)
    """

    def to_internal_value(self, data):
        converted = {}

        for field_name, field in self.fields.items():
            raw_value = data.get(field_name)

            # Se não for fornecido, continue
            if raw_value is None:
                continue

            # Só converte se for string
            if isinstance(raw_value, str):
                # Float
                if isinstance(field, serializers.FloatField):
                    try:
                        converted[field_name] = float(raw_value)
                    except ValueError:
                        self.fail('invalid', input=raw_value)

                # Integer
                elif isinstance(field, (serializers.IntegerField, serializers.PrimaryKeyRelatedField)):
                    try:
                        converted[field_name] = int(raw_value)
                    except ValueError:
                        self.fail('invalid', input=raw_value)

                # Boolean
                elif isinstance(field, serializers.BooleanField):
                    converted[field_name] = raw_value.lower() in ['true', '1', 'sim']

                else:
                    converted[field_name] = raw_value
            else:
                converted[field_name] = raw_value

        return super().to_internal_value(converted)

    def to_representation(self, instance):
        rep = super().to_representation(instance)

        for key, value in rep.items():
            if isinstance(value, (int, float, bool)):
                rep[key] = str(value)

        return rep
