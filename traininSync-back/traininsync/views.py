from rest_framework.viewsets import ModelViewSet

from .models import Personal
from .serializers import PersonalSerializer


class PersonalViewSet(ModelViewSet):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer
