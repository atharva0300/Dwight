from django.urls import path

from .views import RegisterView , SigninView , TaskList
from . import views

urlpatterns = [
    path('register/' , views.RegisterView.as_view()),
    path('signin/' , views.SigninView.as_view()),
    path('tasklist/' , views.TaskList.as_view())
]
