from rest_framework import serializers
from .models import User, Task

# creating a user serialzier 
class UserSerializer(serializers.ModelSerializer) : 
    class Meta : 
        model = User
        fields = ('name' , 'username' , 'email' , 'password')
    

    # a function to create an instance of the serializer 
    def create(self, validated_data) : 
        # creating an isntance of the user
        return User.objects.create(**validated_data)
    

class TaskSerializer(serializers.ModelSerializer) : 
    class Meta : 
        model = Task
        fields = ('quadrant' , 'type' , 'content')
    

    # a function to create an isntance of the serializer
    def create(self , validated_data) :
        # creating an instance of the user 
        return Task.objects.create(**validated_data)