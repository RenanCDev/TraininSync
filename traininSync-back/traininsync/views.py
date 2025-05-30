"""Views da API REST para os modelos do sistema TraininSync."""

from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from .models import (
    Agenda,
    Aluno,
    ContratoDeServico,
    Pagamento,
    Personal,
    RegistroDeProgresso,
    Servico,
)
from .serializers import (
    AgendaSerializer,
    AlunoSerializer,
    ContratoDeServicoSerializer,
    PagamentoSerializer,
    PersonalSerializer,
    RegisterSerializer,
    RegistroDeProgressoSerializer,
    ServicoSerializer,
)


def api_home(request):
    """Renderiza a página inicial da API."""
    return render(request, "api_home.html")


class PersonalViewSet(ModelViewSet):  # pylint: disable=too-many-ancestors
    """ViewSet para o modelo Personal."""

    queryset = Personal.objects.all()  # pylint: disable=no-member
    serializer_class = PersonalSerializer


class AlunoViewSet(ModelViewSet):  # pylint: disable=too-many-ancestors
    """ViewSet para o modelo Aluno."""

    queryset = Aluno.objects.all()  # pylint: disable=no-member
    serializer_class = AlunoSerializer


class ServicoViewSet(ModelViewSet):  # pylint: disable=too-many-ancestors
    """ViewSet para o modelo Servico."""

    queryset = Servico.objects.all()  # pylint: disable=no-member
    serializer_class = ServicoSerializer


class AgendaViewSet(ModelViewSet):  # pylint: disable=too-many-ancestors
    """ViewSet para o modelo Agenda."""

    queryset = Agenda.objects.all()  # pylint: disable=no-member
    serializer_class = AgendaSerializer


class ContratoDeServicoViewSet(ModelViewSet):  # pylint: disable=too-many-ancestors
    """ViewSet para o modelo ContratoDeServico."""

    queryset = ContratoDeServico.objects.all()  # pylint: disable=no-member
    serializer_class = ContratoDeServicoSerializer


class RegistroDeProgressoViewSet(ModelViewSet):  # pylint: disable=too-many-ancestors
    """ViewSet para o modelo RegistroDeProgresso."""

    queryset = RegistroDeProgresso.objects.all()  # pylint: disable=no-member
    serializer_class = RegistroDeProgressoSerializer


class PagamentoViewSet(ModelViewSet):  # pylint: disable=too-many-ancestors
    """ViewSet para o modelo Pagamento."""

    queryset = Pagamento.objects.all()  # pylint: disable=no-member
    serializer_class = PagamentoSerializer


class RegisterView(generics.CreateAPIView):  # pylint: disable=too-many-ancestors
    """View para registro de novos usuários."""

    queryset = User.objects.all()  # pylint: disable=no-member
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer
