from django.urls import path
from . import views

urlpatterns = [
   path('Followers', views.t, name="Followers"),
   path('h',views.one,name='h'),

   path('doctorsinfo',views.two,name='doctorsinfo')
]
