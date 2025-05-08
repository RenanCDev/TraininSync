from rest_framework.routers import SimpleRouter
from django.urls import path
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from .views import api_home, PersonalViewSet, AlunoViewSet, ServicoViewSet, AgendaViewSet, ContratoDeServicoViewSet, RegistroDeProgressoViewSet, PagamentoViewSet


schema_view = get_schema_view(
    openapi.Info(
        title="traininsync",
        default_version='v1',
        description="Documentação da API para integração com o front",
        terms_of_service="https://www.google.com/policies/terms/",
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
    authentication_classes=[]
)

app_name = "traininsync"
router = SimpleRouter()

router.register(r"personal", PersonalViewSet, basename="personal")
router.register(r"aluno", AlunoViewSet, basename="aluno")
router.register(r"servico", ServicoViewSet, basename="servico")
router.register(r"agenda", AgendaViewSet, basename="agenda")
router.register(r"contratodeservico", ContratoDeServicoViewSet, basename="contratodeservico")
router.register(r"registrodeprogresso", RegistroDeProgressoViewSet, basename="registrodeprogresso")
router.register(r"pagamento", PagamentoViewSet, basename="pagamento")


urlpatterns = [
    path('', api_home, name='api_home'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]

urlpatterns += router.urls
