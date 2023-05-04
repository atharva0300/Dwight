from django.shortcuts import render
from .serializers import UserSerializer , TaskSerializer
from rest_framework import serializers
from rest_framework.views import APIView
# importing APIView as we are creating class bsed function

from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status

from django.http import Http404


# importing our models 
from .models import User, Task


# creating a signin api 
class RegisterView(APIView) : 

    def check_duplicates(self, email) : 
        # function for checking duplicate registrations 
        try : 
            User.objects.get(email = email)
        except User.DoesNotExist : 
            # dupliate does not Exist
            return False

        # if the duplicate exists
        return True

    def post(self , request , format = None): 
        # deserializing the request data
        # post data 
        print(request.data)
        print(request.POST)

        item = dict(request.data)
        print("sending : " , item)
        result = self.check_duplicates(item['email'])
        if(result) : 
            # True
            # if duplicate exists
            return Response({"message" : "3"})

        serializer = UserSerializer(data = request.data)

        if serializer.is_valid() : 
            # the serializer is valid 
            serializer.save() 
            return Response({"message" : "1"} , status = status.HTTP_201_CREATED )
    
        # if the serialzier is not valid, then 
        return Response({"message" : "0"}  , status = status.HTTP_400_BAD_REQUEST)

    def get(self , request , format = None) : 
        # hadnling get request here 

        items = User.objects.all()

        # creating a serializer 
        serializer = UserSerializer(items , many = True)
        return Response(serializer.data)
    

class SigninView(APIView) : 

    def get_object(self, email , password):
        try:
            temp = User.objects.get(email = email , password = password)
            return temp.username
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

        username = self.get_object(email[0] , password[0])
        if username : 
            # get the username 
            print('username : ' , username)
            return Response({"message" : "1" , "username"  : str(username) })
        
        return Response({"message" : "0"})
    

class TaskList(APIView) : 
    # a task list class 

    # handling post request 
    def post(self,  request , format = None ): 
        # deseraizliing the object 
        item = dict(request.data)
        print('item : ' , item)

        # creating a sreializer instance 
        serializer = TaskSerializer(data = item)

        if serializer.is_valid() : 
            # serializer is valid
            print('serializer is valid') 
            serializer.save()
            return Response({"message" : "1"} , status = status.HTTP_201_CREATED )
        
        # if the serializer is not valid 
        return Response({"message" : "0"}  , status = status.HTTP_400_BAD_REQUEST)


    def get_quadrant_tasks(self, quadrant) : 
        try:
            taskList = Task.objects.filter(quadrant = quadrant) 
            # NOTE : filter() will return a queryset whereas get() will return a model object
            return taskList
        except User.DoesNotExist:
            return False
    


    # handling get request 
    # displaying all the tasks 
    def get(self ,request , format = None ): 
        print("Handling the get request ")
        item = request.GET 
        print('item : ' , item)
        dictItem = dict(item)
        print('dict item : ' , dictItem)
        quadrant = dictItem['quadrant'][0]
        print('quadrant : ' , quadrant)

        # getting all the tasks with the quadrant value 
        taskList = self.get_quadrant_tasks(quadrant)
        print('taskList : ' , taskList)

        serializer = TaskSerializer(taskList , many= True)
        return Response({"allTasks" : serializer.data})
    
