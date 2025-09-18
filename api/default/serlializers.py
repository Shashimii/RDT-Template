from rest_framework import serializers
from .models import Dummy

class DummySerializer(serializers.ModelSerializer):
    class Meta:
        model = Dummy
        fields = '__all__'  # include all fields from the model