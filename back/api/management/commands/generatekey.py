from django.core.management.base import BaseCommand, CommandError
from api.models import ReadAPIKey


class Command(BaseCommand):
    help = 'Create read api key'

    def add_arguments(self, parser):
        parser.add_argument('name', type=str)
        parser.add_argument('key', type=str)

    def handle(self, *args, **options):
        api_key, key = ReadAPIKey.objects.create_key(options['key'],name=options['name'])
        api_key.save()
        self.stdout.write(key)
