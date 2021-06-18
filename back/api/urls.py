from rest_framework import routers
from .views import PlayersViewSet

router = routers.DefaultRouter()
router.register(r'players', PlayersViewSet)
