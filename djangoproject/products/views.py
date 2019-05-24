from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    # return HttpResponse('Hello from products')
    # render(request, template_name, context=None, content_type=None, status=None, using=None). Here we are just using template name.
    # This Combines a given template with a given context dictionary and returns an HttpResponse object with that rendered text.
    return render(request, 'products/index.html')
