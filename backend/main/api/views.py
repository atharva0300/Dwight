from django.http import JsonResponse    # for http response and not api response 
from rest_framework.response import Response    # api repsonse object
from rest_framework.decorators import api_view, permission_classes  # getting the list of http methods for the api 
from rest_framework.permissions import IsAuthenticated  


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from rest_framework_simplejwt.views import TokenObtainPairView




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):   # overriding the serializerView
    @classmethod
    def get_token(cls, user):   
        print("Inside the get_token of MyTokenObtainPairSerializer")
        # customizing the token claim
        token = super().get_token(user) # obtain the token

        # Add custom claims
        token['username'] = user.username   # adding the username value to the token  
        # this will be the customized token 

        return token


# class based API view
class MyTokenObtainPairView(TokenObtainPairView) :  # overriding the view 
    print("Inside MytokenObtainPairView")
    serializer_class = MyTokenObtainPairSerializer



@api_view(['GET'])  # list of accessible methods 
@permission_classes([IsAuthenticated])
def getRoutes(request) : 
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]

    return Response(routes , safe = False)
    # safe = false -> means that we can send any data type, it will get autometically serailized

