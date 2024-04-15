from django.db import models

# Create your models here.

class BoardInqiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    description = models.TextField()

    def __str__(self):
        return self.name
    
class Board(models.Model):
    picture = models.ImageField(upload_to='boards/')
    description = models.TextField()
    number = models.IntegerField()
    price = models.IntegerField(null=True)
    shaper = models.CharField(max_length=100)

    def __str__(self):
        return self.shaper