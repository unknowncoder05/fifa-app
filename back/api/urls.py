from django.urls import path
from .views import PlayerList, TeamList


urlpatterns = [
    path('players/', PlayerList.as_view()),
    path('team/', TeamList.as_view()),
]
