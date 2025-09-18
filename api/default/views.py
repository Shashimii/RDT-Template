from rest_framework import viewsets
from .models import Dummy
from .serlializers import DummySerializer

# Api Views

class DummyViewSet(viewsets.ModelViewSet):
    queryset = Dummy.objects.all()
    serializer_class = DummySerializer


