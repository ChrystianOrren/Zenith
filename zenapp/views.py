import json

from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, render
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

def dashboard(request):
    return render(request, 'dashboard.html')

def shop(request):
    return render(request, 'shop.html')