from django.shortcuts import render, redirect
from .models import Student, JobApplication
from .forms import StudentForm, JobApplicationForm
from django.contrib.auth.hashers import make_password, check_password
def signup_view(request):
    form = StudentForm()

    if request.method == "POST":
        form = StudentForm(request.POST)
        if form.is_valid():
            student = form.save(commit=False)
            student.password = make_password(form.cleaned_data['password'])
            student.save()
            return redirect('login')

    return render(request, 'jobs/signup.html', {'form': form})
def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        try:
            student = Student.objects.get(username=username)
            if check_password(password, student.password):
                request.session['student_id'] = student.id
                return redirect('apply')
        except:
            pass

    return render(request, 'jobs/login.html')
def apply_job(request):
    if not request.session.get('student_id'):
        return redirect('login')

    form = JobApplicationForm()

    if request.method == "POST":
        form = JobApplicationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list')

    return render(request, 'jobs/apply.html', {'form': form})
def list_applications(request):
    if not request.session.get('student_id'):
        return redirect('login')

    applications = JobApplication.objects.all()
    return render(request, 'jobs/applications_list.html', {'applications': applications})
def logout_view(request):
    request.session.flush()
    return redirect('login')
def home(request):
    return render(request, "jobs/home.html")

