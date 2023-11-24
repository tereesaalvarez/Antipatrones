from django.db import models

class Historial(models.Model):
    expresion = models.CharField(max_length=200)
    resultado = models.FloatField()

