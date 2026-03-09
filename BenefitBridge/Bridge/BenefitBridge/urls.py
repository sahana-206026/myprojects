from django.conf.urls.i18n import i18n_patterns
from django.views.i18n import set_language


from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path("set-language/", set_language, name="set_language"),
    path('i18n/', set_language, name='set_language'),
    path("admin/", admin.site.urls),

    path("", views.home, name="home"),
    path("eligibility/", views.eligibility, name="eligibility"),
    path("schemes/", views.schemes, name="schemes"),

    
    path("scheme/<int:id>/", views.scheme_detail, name="scheme_detail"),

    path("saved/", views.saved, name="saved"),
    path("about/", views.about, name="about"),
]
