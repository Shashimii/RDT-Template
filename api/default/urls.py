from rest_framework import routers
from django.urls import path, include
from .views import DummyViewSet

router = routers.DefaultRouter()
router.register(r'dummys', DummyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
