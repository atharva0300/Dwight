from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import serializers
from rest_framework.views import APIView
# importing APIView as we are creating class bsed function

from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status

from django.http import Http404


# importing our models 
from .models import User


# Create your views here.

# creating a signin api 
class RegisterView(APIView) : 


    def post(self , request , format = None): 
        # deserializing the request data
        # post data 
        print(request.data)
        serializer = UserSerializer(data = request.POST)

    

        if serializer.is_valid() : 
            # the serializer is valid 
            serializer.save() 
            return Response(serializer.data , status = status.HTTP_201_CREATED )
    
        # if the serialzier is not valid, then 
        return Response(serializer.data  , status = status.HTTP_400_BAD_REQUEST)

    def get(self , request , format = None) : 
        # hadnling get request here 

        items = User.objects.all()

        # creating a serializer 
        serializer = UserSerializer(items , many = True)
        return Response(serializer.data)
    

class SigninView(APIView) : 

    def get_object(self, email , password):
        try:
            return User.objects.get(email = email , password = password)
        except User.DoesNotExist:
            return False
        

    def get(self , request , format = None) : 
        print("Inside get request of SigninView")
        item = request.GET
        print(item)
        dictItem = dict(item)
        print(dictItem)
        email = dictItem['email']
        password = dictItem['password']
        print(email[0])
        print(password[0])

        temp = self.get_object(email[0] , password[0])
        if temp : 
            return Response({"message" : "1"})
        
        return Response({"message" : "0"})