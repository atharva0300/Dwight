from rest_framework import serializers
from .models import User

# creating a user serialzier 
class UserSerializer(serializers.ModelSerializer) : 
    class Meta : 
        model = User
        fields = ('name' , 'username' , 'email' , 'password')
    

    # a function to create an instance of the serializer 
    def create(self, validated_data) : 
        # creating an isntance of the user
        return User.objects.create(**validated_data)
    
