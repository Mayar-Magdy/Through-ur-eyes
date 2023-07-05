from django.contrib import admin
from django.urls import path , include
from .views import chatbot

urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
    path('', include('Accounts.urls')),
    path('TheNearestDoctor/', include('Find_The_Nearest_Doctor.urls')),
    path('chatbot/', chatbot, name='chatbot'),
    ]
