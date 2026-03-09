from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('eligibility/', views.eligibility, name='eligibility'),
    path('results/', views.results, name='results'),
    path('saved/', views.saved, name='saved'),
]
