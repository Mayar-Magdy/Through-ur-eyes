from django.urls import path
from .views import register, user_login , home,services, profile

urlpatterns = [
    path('signup/', register, name='signup'),
    path('login/', user_login, name='login'),
    path('home/', home, name='home'),
    path('services/',services,name='services'),
    path('profile/',profile,name='profile'),

]
