from django.contrib import admin
from rest_framework_api_key.admin import APIKeyModelAdmin
from .models import ReadAPIKey, Player


@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'nation', 'team')


@admin.register(ReadAPIKey)
class ReadAPIKeyAdmin(APIKeyModelAdmin):
    pass
