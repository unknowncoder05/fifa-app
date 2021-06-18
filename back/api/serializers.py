from rest_framework import serializers
from .models import *


class PlayerSerializer(serializers.ModelSerializer):
    many = True

    def __init__(self, *args, **kwargs):
        many = kwargs.pop('many', True)
        super(PlayerSerializer, self).__init__(many=many, *args, **kwargs)

    class Meta:
        model = Player
        fields = ['id', 'name', 'position', 'nation']
