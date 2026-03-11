from django.shortcuts import render
from .models import Greeting

# Create your views here.
def home_view(request):

    all_greetings = Greeting.objects.all()
# Check the name inside the { }
    return render(request, 'hello.html', {'greetings_list': all_greetings})