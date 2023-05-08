from rest_framework import serializers
from .models import Profile, Task

# creating a user serialzier 
class ProfileSerializer(serializers.ModelSerializer) : 
    class Meta : 
        model = Profile
        fields = ('id' , 'name' , 'username' , 'email' , 'password')
    

    # a function to create an instance of the serializer 
    def create(self, validated_data) : 
        # creating an isntance of the user
        return Profile.objects.create(**validated_data)
    

class TaskSerializer(serializers.ModelSerializer) : 
    class Meta : 
        model = Task
        fields = '__all__'

        """
            user = models.ForeignKey(User , on_delete=models.CASCADE)
    taskUUID = models.UUIDField(default = uuid.uuid4 ,unique = True) 
    quadrant = models.TextField(max_length=20)
    type = models.TextField(max_length=20)
    content = models.TextField(max_length=100000)
    icons = models.ImageField(upload_to='backend/icons' , null=True)   # add upload to photo
    due = models.DateTimeField(default = datetime.now)
    reminder = models.DateTimeField(default=datetime.now)
    completed = models.BooleanField(default = False)
        
        """
    

    # a function to create an isntance of the serializer
    def create(self , validated_data) :
        # creating an instance of the user 
        return Task.objects.create(**validated_data)