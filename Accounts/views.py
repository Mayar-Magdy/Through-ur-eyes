import re
from django.contrib import auth
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.shortcuts import render, redirect
from .models import CustomUser
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView
from django.contrib.auth.hashers import make_password
from datetime import datetime
from .models import CustomUser
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse 



User = get_user_model()

def register(request):
 try:
   if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        national_number = request.POST['national_number']
        phone_number = request.POST['phone_number']
        email = request.POST['email']
        gender = request.POST['gender']
        date_of_birth = request.POST['date_of_birth']
        city = request.POST['city']

        # Validate the form data
        required_fields = ['username', 'password', 'national_number', 'phone_number', 'gender', 'date_of_birth','city']
        if any(not request.POST[field] for field in required_fields):
            error_message = "Please fill in all the required fields."
            return render(request, 'registration/register.html', {'error_message': error_message})

        # Validate the format of the national number
        if not re.match(r'^\d{14}$', national_number):
            error_message = "Please enter a valid 14-digit national number."
            return render(request, 'registration/register.html', {'error_message': error_message})

        # Check if the national number already exists in the database
        if User.objects.filter(national_number=national_number).exists():
            error_message = "A user with this national number already exists."
            return render(request, 'registration/register.html', {'error_message': error_message})

        try:
            user = CustomUser.objects.create_user(
                username=username,
                password=password,
                national_number=national_number,
                phone_number=phone_number,
                email=email,
                gender=gender,
                date_of_birth=date_of_birth,
                city=city
            )
            print(email)
            print(city)
            # Log the user in
            login(request, user)
            return redirect('home')  

        except IntegrityError:
            print('herrrre')
            error_message = "An error occurred while creating the user."
            return render(request, 'registration/register.html', {'error_message': error_message})
        
 except:
    print('here')
    error_message = "There is an error in your data"
    return render(request, 'registration/register.html', {'error_message': error_message})
 return render(request, 'registration/register.html')
def user_login(request):
    if request.method == 'POST':
        national_number = request.POST['national_number']
        password = request.POST['password']
        
        if not re.match(r'^\d{14}$', national_number):
            error_message = "Please enter a valid 14-digit national number."
            return render(request,'registration/user_user_login.html', {'error_message': error_message})
        else:
          try:
           user_login=auth.authenticate(national_number=national_number, password=password) 
           print(user_login)
           
           

          
           if user_login is not None:
            auth.login(request, user_login)
            return redirect('home')
           else:
               error_message = "Invalid national number or password."
               return render(request, 'registration/user_user_login.html', {'error_message': error_message})

          except User.DoesNotExist:
            error_message = "User is not found"
            return render(request, 'registration/user_user_login.html', {'error_message': error_message})
        
    return render(request, 'registration/user_user_login.html')

def home(request):
    return render(request,'home.html')

def services(request):
    return render(request,'services.html')


def profile(request):
   return render(request,'registration/profile.html')

@login_required(login_url='login')
def update_user(request):
 user= request.user
 if request.method == 'POST':
    new_phone = request.POST.get('phone_number')
    user.phone_number = new_phone
    user.save()
    return JsonResponse({'status': 'success', 'message': 'Phone number updated successfully'})
 else:
     return JsonResponse({'status': 'error', 'message': 'Invalid request'})
   

