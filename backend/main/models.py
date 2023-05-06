from django.db import models
import uuid 

# Create your models here.
# creating a user model here 
class User(models.Model) : 
    name = models.TextField(max_length=50)
    username = models.TextField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.TextField(max_length=50)


class Task(models.Model) :
    taskUUID = models.UUIDField(default = uuid.uuid4 ,unique = True) 
    quadrant = models.TextField(max_length=20)
    type = models.TextField(max_length=20)
    content = models.TextField(max_length=100000)
    # image = models.ImageField()   # add upload to photo

