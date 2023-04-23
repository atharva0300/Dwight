from django.db import models

# Create your models here.
# creating a user model here 
class User(models.Model) : 
    name = models.TextField(max_length=50)
    username = models.TextField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.TextField(max_length=50)


