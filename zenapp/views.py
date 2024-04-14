import json

from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, render
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt

from .models import BoardInqiry

# Create your views here.

def dashboard(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        description = request.POST['desc']

        new_inqury = BoardInqiry(name=name, email=email, description=description)
        new_inqury.save()
        

    return render(request, 'dashboard.html')

def shop(request):
    return render(request, 'shop.html')