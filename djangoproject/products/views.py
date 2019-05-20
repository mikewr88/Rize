from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    # return HttpResponse('Hello from products')
    return render(request, 'products/index.html')
