from rest_framework import viewsets
from .models import *
from .serializers import *

# ViewSets define the view behavior.


class PlayersViewSet(viewsets.ModelViewSet):
    #permission_classes = (IsAuthenticated,)
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
