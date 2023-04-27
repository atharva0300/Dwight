from django.contrib import admin
from .models import User , Task

# Register your models here.

# registering the User model on the admin site 
admin.site.register(User)
admin.site.register(Task)