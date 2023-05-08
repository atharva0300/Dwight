from django.db import models
import uuid 
from datetime import datetime
from django.utils import timezone



# Create your models here.
# creating a user model here 
class Profile(models.Model) : 
    name = models.TextField(max_length=50)
    username = models.TextField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.TextField(max_length=50)

    class Meta : 
        verbose_name_plural = 'Profiles'



class Task(models.Model) :
    user = models.ForeignKey(Profile , on_delete=models.CASCADE)
    taskUUID = models.UUIDField(default = uuid.uuid4 ,unique = True) 
    quadrant = models.TextField(max_length=20)
    type = models.TextField(max_length=20)
    content = models.TextField(max_length=100000)
    icon = models.ImageField(upload_to='backend/icons' , null=True , blank = True)   # add upload to photo
    due = models.CharField(max_length=100)  # temporarily set to CharField ( will have to use datetime later )
    reminder = models.CharField(max_length=100) # temporaily set to CharField ( will have to use datetime later )
    completed = models.BooleanField(default = False)


class SubTask(models.Model) :
    task = models.ForeignKey(Task  , on_delete=models.CASCADE)
    content = models.TextField(max_length=1000)


class Attachment(models.Model) :
    task = models.ForeignKey(Task , on_delete=models.CASCADE)
    files = models.FileField(upload_to='backend/files')

    class Meta : 
        # setting the plural name for the admin 
        verbose_name_plural = 'Attachments'

