from django.contrib import admin
from .models import Profile , Task, SubTask, Attachment

# Register your models here.

# registering the User model on the admin site 
admin.site.register(Profile)
admin.site.register(Task)
admin.site.register(SubTask)
admin.site.register(Attachment)