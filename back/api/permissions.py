from rest_framework_api_key.permissions import BaseHasAPIKey
from .models import ReadAPIKey


class HasReadAPIKey(BaseHasAPIKey):
    model = ReadAPIKey
