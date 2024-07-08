from django.shortcuts import render, redirect
from .forms import CreateForm, ContactForm

def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    form = ContactForm()
    context = {
        'form' : form,
    }
    return render(request, 'index.html', context)

def register(request):
    if request.method == 'POST':
        form = CreateForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    form = CreateForm()
    context = {
        'form' : form,
    }
    return render(request, 'register.html', context)