from django.db import models
from rest_framework_api_key.models import AbstractAPIKey
# Create your models here.

POSITIONS_CHOICES = [  # https://fifauteam.com/fifa-21-positions/
    ('GK', 'Goalkeeper'),

    ('RB', 'Right Backs'),
    ('LB', 'Left Backs'),

    ('RWB ', 'Right Wing Backs'),
    ('LWB ', 'Left Wing Backs'),

    ('CB', 'Centre Back'),
    ('CDM', 'Centre Defensive Midfielder'),
    ('CM', 'Centre Midfielder'),
    ('CAM', 'Centre Attacking Midfielder'),

    ('RM', 'Right Midfielder'),
    ('LM', 'Left Midfielder'),

    ('RW', 'Right Wing'),
    ('LW', 'Left Wing'),

    ('RF', 'Right Forwards'),
    ('LF', 'Left Forwards'),

    ('CF', 'Centre Forward'),
    ('ST', 'Striker'),

]


class Player(models.Model):
    name = models.CharField(max_length=100, default='')
    position = models.CharField(
        choices=POSITIONS_CHOICES, default='LB', max_length=100)
    nation = models.CharField(max_length=50, default='')
    team = models.CharField(max_length=100, default='')

    class Meta:
        ordering = ['name']
        verbose_name = ('Player')
        verbose_name_plural = ('Players')


class ReadAPIKey(AbstractAPIKey):
    class Meta(AbstractAPIKey.Meta):
        verbose_name = "Read Only API key"
        verbose_name_plural = "Read Only API keys"
