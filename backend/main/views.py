from django.shortcuts import render
from .serializers import ProfileSerializer , TaskSerializer, SubTaskSerializer
from rest_framework import serializers
from rest_framework.views import APIView
# importing APIView as we are creating class bsed function

from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

from django.http import Http404

# importing authentication classes and permission classes 
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

# parsers 
from rest_framework.parsers import MultiPartParser, FormParser


# importing admin User
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# import PIL 
from PIL import Image

from django.core.serializers.json import DjangoJSONEncoder
from django.db.models.fields.files import ImageFieldFile

# importing base64
import base64
import json
from io import BytesIO


# importing our models 
from .models import Profile , Task, SubTask

from uuid import uuid4


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
        """
        1. createa user in the admin and give permissions to it
        """
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

        # creating a new user in the admin 
        user = User.objects.create_user(item['username'],  item['email'] , item['password'])
        # normal user, no privilage given
        user.is_staff()
        user.save()
        print('user.id : ' , user.id)

        serializer = ProfileSerializer(data = item)

        # create a unique uuid for the registered user 


        if serializer.is_valid() : 
            # the serializer is valid 
            serializer.save() 
            return Response({"message" : "1" , "userID" : user.id} , status = status.HTTP_201_CREATED )
    
        # if the serialzier is not valid, then 
        return Response({"message" : "0"}  , status = status.HTTP_400_BAD_REQUEST)

    def get(self , request , format = None) : 
        # hadnling get request here 

        items = User.objects.all()

        # creating a serializer 
        serializer = ProfileSerializer(items , many = True)
        return Response(serializer.data)
    

class SigninView(APIView) : 

    def get_object(self, email , password):
        try:
            temp = Profile.objects.get(email = email , password = password)
            return temp.username 
        except Profile.DoesNotExist:
            return False
    
    def get_user(self, email , password ): 
        user = Profile.objects.filter(email = email , password = password)
        return user
        

    
    def get(self , request , format = None) : 
        print("Inside get request of SigninView")
        item = request.GET
        print(item)
        dictItem = dict(item)
        print(dictItem)
        username = dictItem['username']
        password = dictItem['password']
        print(username[0])
        print(password[0])

        user = authenticate(username = str(username[0]) , password = str(password[0]))
        
        if user : 
            # get the username 
            print('username : ' , username)
            # obtain the user.id 
            userID = User.objects.get(username = str(username[0])).id
            return Response({"message" : "1" , "username"  : str(user.username) , "userID" : userID } , status = status.HTTP_200_OK)
        
        return Response({"message" : "0"} , status = status.HTTP_400_BAD_REQUEST)
    
    

class TaskList(generics.ListCreateAPIView) : 
    # a task list class 
    parser_classes = (MultiPartParser, FormParser)

    # permission_classes = [IsAuthenticated]

    # handling post request 
    def create(self,  request , format = None ): 
        print('inside create task list\n')
        item = request.data
        # converting the duedatetime and remdatetime to django format 
        print(item['due'])
        print(item['reminder'])
        print('request.data : ' , request.data)

        task_serializer = TaskSerializer(data=request.data)
        if task_serializer.is_valid():
            task_serializer.save()
            return Response(task_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', task_serializer.errors)
            return Response(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def get_quadrant_tasks(self, quadrant) : 
        try:
            taskList = Task.objects.filter(quadrant = quadrant) 
            # NOTE : filter() will return a queryset whereas get() will return a model object
            return taskList
        except User.DoesNotExist:
            return False
    


    # handling get request 
    # displaying all the tasks 
    def list(self ,request , format = None ): 
        print("inside list task list\n ")
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
    

class DeleteTask(APIView) : 


    def get(self , request , format = None) : 
        print('inside get of deletettask')
        item = request.GET
        print('item : ' , item)
        dictItem = dict(item)
        print('dictItem : ' , dictItem)

        taskUUID = dictItem['taskUUID'][0]
        print('taskUUID : ' , taskUUID)

        try : 
            # deleting the task with the received uuid 
            Task.objects.all().filter(taskUUID = taskUUID).delete()
            print('task deleted')
            # obtaining the deleted task 
            # item = Task.objects.get(uuid = uuid )
            # print('deleted item : ' , item)

            return Response({'message' : 'Task successfully deleted'} , status = status.HTTP_200_OK)
        except : 
            print('didnt delete the task')
            return Response({'message' : 'Didnt delete the task'} , status = status.HTTP_400_BAD_REQUEST)


    

class UpdateTask(APIView) : 


    def get(self , request, format = None ):
        print('inside the get method of the updateTask')
        item  =request.GET 
        dictItem = dict(item)
        print(dictItem)

        task = Task.objects.filter(taskUUID = request.GET['taskUUID'])
        # serialize the task 
        serializer = TaskSerializer(task , many = True)
        print('serializer.data : ' , serializer.data)

        return Response({'taskDetails' : serializer.data})


    def post(self , request , format = None) : 
        print("Inside teh updateTask")
        # deseraizliing the object 
        item = dict(request.data)
        print('item : ' , item)


        try : 
            # obtain the object
            obj = Task.objects.get(uuid = item['uuid'])
            obj.content = item['content']
            obj.save()
            return Response({"message" : "Task updated successfully"})
                 
        except : 
            return Response({"message" : "Task didn't update"})



class ExtendedEncoder(DjangoJSONEncoder):
    def default(self, o):
        if isinstance(o, ImageFieldFile):
            return str(o)
        else:
            return super().default(o)

class IconImage(APIView) : 

    def get(self , request , format = None) : 
        print("inside the IcomImage View GET ")
        iconPath = request.GET['iconPath']
        print('iconPath : ' , iconPath)
        taskUUID = request.GET['taskUUID']

        # obtain the task with the taskUUID 
        task = Task.objects.get(taskUUID = taskUUID)

        # obtain the image object
        icon = task.icon
        iconImage = Image.open(icon)
        iconImage.show()

        # encoding the image to base64
        # mystr = json.dumps(str(iconImage) , cls=ExtendedEncoder)
        imgByteArr = BytesIO()
        # iconImage.save(imgByteArr , format=iconImage.format)
        
        # imgByteArr = imgByteArr.getValue()
        # bytesarray = bytes(Image.fromarray(array.reshape((600,600,3))).tobytes())
        #print('imgByteArr : ' , imgByteArr)

        mystr = base64.b64encode(iconImage.tobytes())
        print('mystr  : ' , mystr)

        return Response({"iconImage" : imgByteArr } ,  status = status.HTTP_200_OK)
    
class SubTaskView(APIView) : 

    def post(self , request , format = None ) : 
        print('inside subTaskView POST')
        taskUUID = request.POST.get('taskUUID')
        subTaskContent = request.POST.get('subTaskContent')
        print('subTaskContent : ' , subTaskContent)
        print('taskUUID : ' , taskUUID)
        
        subtask_serializer = SubTaskSerializer(data = request.data)
        if(subtask_serializer.is_valid()) : 
            subtask_serializer.save()
            return Response({"message" : "subTask Created" } , status = status.HTTP_201_CREATED)
        
        else : 
            return Response({"message" : "subTask Creation Failed"} , status=status.HTTP_400_BAD_REQUEST)

        

    """
    def get(self , request , format = None ) : 
        print('inside SUbTaskView GET')
        taskUUID = request.GET['taskUUID']
        subTaskContent = request.GET['subTaskContent']
    """
