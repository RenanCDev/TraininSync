from rest_framework.routers import SimpleRouter

from .views import PersonalViewSet


app_name = "traininsync"
router = SimpleRouter()
router.register(r"", PersonalViewSet, basename="traininsync")
urlpatterns = router.urls
