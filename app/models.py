from django.db import models
    
class Create(models.Model):
    name = models.CharField(max_length=255)
    birthday = models.CharField(max_length=255, null=True, blank=True)
    phone = models.DecimalField(max_digits=12, decimal_places=2)
    email = models.EmailField(max_length=255, null=True, blank=True)
    grade = models.CharField(max_length=255, default="10th")
    code = models.CharField(max_length=11 ,unique=True)
    school = models.CharField(max_length=255, default="rasht-zone1-2-b")
    
    def __str__(self):
        return self.name
    
    
class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    message = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['created_date']
    def __str__(self):
        return self.name