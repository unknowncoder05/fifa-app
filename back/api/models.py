from django.db import models

# Create your models here.

POSITIONS_CHOICES = [
    ("LB", "no idea")
]


class Player(models.Model):
    name = models.CharField(max_length=100, default='')
    position = models.CharField(
        choices=POSITIONS_CHOICES, default='python', max_length=100)
    nation = models.CharField(max_length=100, default='')

    class Meta:
        ordering = ['name']
        verbose_name = ('Player')
        verbose_name_plural = ('Players')
