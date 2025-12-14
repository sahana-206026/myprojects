
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password
from .forms import RegisterForm, LoginForm
from .models import Student

def home(request):
    return render(request, 'accounts/home.html')

def register(request):
    if request.method=='POST':
        form=RegisterForm(request.POST)
        if form.is_valid():
            data=form.cleaned_data
            if data['password'] != data['confirm_password']:
                messages.error(request,"Passwords don't match")
                return redirect('register')

            Student.objects.create(
                username=data['username'],
                email=data['email'],
                roll_number=data['roll_number'],
                course=data['course'],
                department=data['department'],
                year_of_study=data['year_of_study'],
                bio=data['bio'],
                password=make_password(data['password'])
            )
            messages.success(request,"Registration successful!")
            return redirect('login')
    else:
        form=RegisterForm()
    return render(request,'accounts/register.html',{'form':form})

def login_view(request):
    if request.method=='POST':
        form=LoginForm(request.POST)
        if form.is_valid():
            username=form.cleaned_data['username']
            password=form.cleaned_data['password']

            try:
                student=Student.objects.get(username=username)
            except Student.DoesNotExist:
                messages.error(request,"User not found")
                return redirect('login')

            if check_password(password, student.password):
                request.session['student_id']=student.id
                return redirect('dashboard')
            else:
                messages.error(request,"Incorrect password")
                return redirect('login')
    else:
        form=LoginForm()
    return render(request,'accounts/login.html',{'form':form})

def dashboard(request):
    sid=request.session.get('student_id')
    if not sid:
        return redirect('login')

    student=Student.objects.get(id=sid)
    return render(request,'accounts/dashboard.html',{'student':student})

def logout_view(request):
    request.session.flush()
    return redirect('login')
