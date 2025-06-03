"""URLs do módulo de configuração inicial do projeto."""

from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import home

urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/v1/login/", TokenObtainPairView.as_view(), name="login"),
    path("api/v1/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/v1/", include("traininsync.urls", namespace="traininsync")),
]
