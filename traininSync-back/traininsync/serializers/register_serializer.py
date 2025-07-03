"""Serializer responsável por registrar novos usuários."""

from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer


class RegisterSerializer(ModelSerializer):
    """Serializer para criação de novos usuários."""

    class Meta:
        """Meta configura os campos usados na criação de usuários."""

        ...

        model = User
        fields = ["username", "password", "email"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            password=validated_data["password"],
            email=validated_data.get("email", ""),
        )
        return user
