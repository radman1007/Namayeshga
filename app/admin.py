from django.contrib import admin
from .models import Create, Contact
    
@admin.register(Create)
class AdminCreate(admin.ModelAdmin):
    list_display = ['name', 'grade' , 'code' , 'school']
    ordering = ['name']
    
@admin.register(Contact)
class AdminContact(admin.ModelAdmin):
    list_display = ['name', 'email', 'message', 'created_date']
    ordering = ['created_date']