from django.forms import ModelForm
from .models import BoardInqiry

class BoardForm(ModelForm):
    class Meta:
        model = BoardInqiry
        fields = '__all__'