import json

from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, render, redirect
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt

from .models import Board
from .forms import BoardForm

# Create your views here.

def dashboard(request):
    board_form = BoardForm()
    form_success = False

    if request.method == 'POST':
        board_form = BoardForm(request.POST)
        if board_form.is_valid():
            board_form.save()
            form_success = True
            return redirect('dashboard')


    context = {
        'form': board_form,
        'form_success': form_success,
    }

    # Render the dashboard page with the form and form success flag
    return render(request, 'dashboard.html', context)

def shop(request):
    data = Board.objects.all()
    return render(request, 'shop.html', {'data': data})