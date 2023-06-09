from django.urls import path

from . import views

urlpatterns = [
    path('register/' , views.RegisterView.as_view()),
    path('signin/' , views.SigninView.as_view()),
    path('tasklist' , views.TaskList.as_view()),
    # path('tasklist?quadrant=<quadrant' , views.TaskList.as_view()),
    path('deletetask' , views.DeleteTask.as_view()),
    # path('deletetask' , views.DeleteTask.as_view())
    path('updatetask' , views.UpdateTask.as_view()),
    path('iconImage' , views.IconImage.as_view() ),
    path('subtask' , views.SubTaskView.as_view()),
    path('updatesubtask' , views.UpdateSubTask.as_view() )
]
