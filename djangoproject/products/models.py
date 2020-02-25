from django.db import models

# Create your models here.
class Product(models.Model):
    name= models.CharField(max_length=255)
    description= models.CharField(max_length=255)
    price= models.DecimalField(max_digits=4, decimal_places=2)
    created_at= models.DateTimeField(auto_now_add=True)
    imgurl=models.CharField(max_length=255, null = True)
