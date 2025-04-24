from django.contrib import admin
from django.urls import path, include
from .views import home
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="traininsync",
        default_version='v1',
        description="Documentação da API para integração com o front",
        terms_of_service="https://www.google.com/policies/terms/",
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny),
)

urlpatterns = [
    path('', home),
    path("admin/", admin.site.urls),
    path("api/traininsync/", include("traininsync.urls", namespace="traininsync")),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0)),
]