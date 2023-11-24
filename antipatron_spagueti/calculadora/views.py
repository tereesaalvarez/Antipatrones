from django.shortcuts import render
from django.http import HttpResponse

def calculadora(request):
    return render(request, 'calculadora/calculadora.html')
