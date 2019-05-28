from products.models import Product
from rest_framework import viewsets,  permissions
from .serializers import ProductSerializer

#Lead viewset allow to create CRUD API without having to specify explicit methods for functionality
#  In other frameworks you may also find conceptually similar implementations named something like 'Resources' or 'Controllers'

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer
