from django.urls import path
from . import views

urlpatterns = [
   path('img', views.img, name="img"),
   path('i',views.i,name='i'),   
]
