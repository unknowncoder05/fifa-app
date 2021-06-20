from rest_framework import serializers
from .models import *


class PlayerSerializer(serializers.ModelSerializer):
    many = True
    def __init__(self,*args, **kwargs):
        many = kwargs.pop('many', True)
        self.Meta.fields = kwargs.pop('custom_fields', ['name', 'position', 'nation', 'team'])
        super(PlayerSerializer, self).__init__(many=many, *args, **kwargs)
    class Meta:
        model = Player
        fields = ['name', 'position', 'nation', 'team']

    

