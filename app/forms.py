from django import forms
from .models import Create, Contact

class CreateForm(forms.ModelForm):
    class Meta:
        model = Create
        fields = [
            "name",
            "birthday",
            "phone",
            "email",
            "grade",
            "code",
            "school",
        ]
        
         
class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'