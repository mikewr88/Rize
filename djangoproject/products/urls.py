from django.urls import path
from . import views
# re_path is the new alias for url(regex)

urlpatterns = [
    path('', views.index, name='index' )
];
