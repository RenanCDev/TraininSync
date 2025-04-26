from rest_framework.routers import SimpleRouter
from django.urls import path, re_path, include
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from .views import PersonalViewSet, AlunoViewSet, ServicoViewSet


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

router.register(r"", PersonalViewSet, basename="traininsync")
router.register(r"", AlunoViewSet, basename="traininsync")
router.register(r"", ServicoViewSet, basename="traininsync")

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path('', include(router.urls))
]
