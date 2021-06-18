from rest_framework import serializers
from .models import *


class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Player
        fields = ['name', 'position', 'nation']
