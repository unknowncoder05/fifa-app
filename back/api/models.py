from django.db import models
from rest_framework_api_key.models import AbstractAPIKey
# Create your models here.

POSITIONS_CHOICES = [
    ("LB", "no idea")
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
