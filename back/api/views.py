from .pagination import PlayerPagination, PaginationHandlerMixin
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import *
from .permissions import HasReadAPIKey
from .serializers import *
from rest_framework_api_key.permissions import HasAPIKey

# ViewSets define the view behavior.




class PlayerList(APIView, PaginationHandlerMixin):
    pagination_class = PlayerPagination
    serializer_class = PlayerSerializer
    permission_classes = [HasReadAPIKey]

    def get(self, request, format=None, *args, **kwargs):
        if 'search' not in request.GET:
            return Response({'detail':'search attribute is required'}, status=status.HTTP_400_BAD_REQUEST)
        order = '-' if request.GET.get('order') == 'desc' else ''
        instance = Player.objects.all().filter(
            name__icontains=request.GET['search']
        ).order_by(order+'name')


        page = self.paginate_queryset(instance)
        if page is not None:
            serializer = self.get_paginated_response(
                self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(instance,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    ''' # This action should be done just for an admin user
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    '''


class TeamList(APIView, PaginationHandlerMixin):
    pagination_class = PlayerPagination
    serializer_class = PlayerSerializer
    permission_classes = [HasReadAPIKey]

    def post(self, request, format=None, *args, **kwargs):
        if 'Name' not in request.data:
            return Response({'detail':'Name parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
        if 'Page' not in request.data:
            return Response({'detail':'Page parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
        instance = Player.objects.all().filter(
            team__iexact=request.data["Name"]
        )
        page = self.paginate_queryset(instance, page = request.data["Page"])
        if page is not None:
            serializer = self.get_paginated_response(
                self.serializer_class(page, custom_fields=['name', 'position', 'nation'], many=True).data)
        else:
            serializer = self.serializer_class(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
