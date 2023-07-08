from django.urls import path
from .views import register, user_login , home,services, profile , update_user

from . import views


urlpatterns = [
    path('signup/', register, name='signup'),
    path('login/', user_login, name='login'),
    path('home/', home, name='home'),
    path('services/',services,name='services'),
    path('profile/',profile,name='profile'),
    path('update_user',views.update_user,name='update_user'),
    path('about', views.about, name='about'),
    path('OurTeam', views.OurTeam, name='OurTeam'),
    path('FAQ', views.FAQ, name='FAQ'),
    path('how-we-help', views.help, name='how-we-help'),
    path('privacy-policy', views.privacy_policy, name='privacy-policy'),
    path('Terms-conditions', views.terms_conditions, name='Terms-conditions'),
    #path('<int:pk>/edit/', views.ProfileUpdateView.as_view(),
    #     name="account_edit"),
    path('contact_us', views.contact_us, name='contact_us'),

    



]
