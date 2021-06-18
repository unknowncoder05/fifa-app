from django.urls import path
from .views import PlayerList


urlpatterns = [
    path('players/', PlayerList.as_view()),
]
