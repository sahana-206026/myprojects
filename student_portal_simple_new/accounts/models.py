
from django.db import models

class Student(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=200)
    roll_number = models.CharField(max_length=50)
    course = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    year_of_study = models.IntegerField()
    bio = models.TextField(blank=True)
