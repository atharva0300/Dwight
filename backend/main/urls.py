from django.urls import path

from .views import RegisterView , SigninView
from . import views

urlpatterns = [
    path('register/' , views.RegisterView.as_view()),
    path('signin/' , views.SigninView.as_view())
]
