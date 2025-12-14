from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("signup/", views.signup_view, name="signup"),
    path("login/", views.login_view, name="login"),
    path("apply/", views.apply_job, name="apply"),
    path("list/", views.list_applications, name="list"),
    path("logout/", views.logout_view, name="logout"),
]
