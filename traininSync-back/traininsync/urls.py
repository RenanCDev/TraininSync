from rest_framework.routers import SimpleRouter

from .views import PersonalViewSet, AlunoViewSet, ServicoViewSet


app_name = "traininsync"
router = SimpleRouter()

router.register(r"personais", PersonalViewSet, basename="personais")
router.register(r"alunos", AlunoViewSet, basename="alunos")
router.register(r"servicos", ServicoViewSet, basename="servicos")

urlpatterns = router.urls
