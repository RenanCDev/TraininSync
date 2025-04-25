from rest_framework.routers import SimpleRouter

from .views import PersonalViewSet, AlunoViewSet, ServicoViewSet


app_name = "traininsync"
router = SimpleRouter()

router.register(r"", PersonalViewSet, basename="traininsync")
router.register(r"", AlunoViewSet, basename="alunos")
router.register(r"", ServicoViewSet, basename="servicos") 
urlpatterns = router.urls
