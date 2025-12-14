from django.db import models

class Student(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.username


class JobApplication(models.Model):
    student_name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=200)
    resume_link = models.URLField()
    status = models.CharField(max_length=20, default="APPLIED")

    def __str__(self):
        return self.job_title
