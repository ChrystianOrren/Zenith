import json

from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, render, redirect
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt

from .models import Board
from .forms import BoardForm

# Create your views here.

def dashboard(request):
    if request.method == 'POST':
        form = BoardForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('dashboard')
        else:
            pass
    else:
        board_form = BoardForm()

    context = {
        'form': board_form
    }
    return render(request, 'dashboard.html', context)

def shop(request):
    data = Board.objects.all()
    return render(request, 'shop.html', {'data': data})