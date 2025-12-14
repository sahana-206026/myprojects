from django import forms
from .models import Student, JobApplication

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['username', 'email', 'password']
        widgets = {
            'password': forms.PasswordInput()
        }


class JobApplicationForm(forms.ModelForm):
    class Meta:
        model = JobApplication
        fields = ['student_name', 'job_title', 'resume_link']
