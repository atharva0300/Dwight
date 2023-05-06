from django.urls import path
from . import views     # from the api/views folder
from .views import MyTokenObtainPairView    # imorting our custom api class 

from rest_framework_simplejwt.views import (
    # TokenObtainPairView,
    TokenRefreshView,
)   # obtaining the views from the simplejwt token 

urlpatterns = [
    path('' , views.getRoutes),  # obtaining the views from the api/views
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),    # using .as_view() because it is a class based view
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
