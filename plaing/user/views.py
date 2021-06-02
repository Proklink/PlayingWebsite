from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from common.decorators import ajax_required

@ajax_required
def validate(request):
    if request.method == "POST":
        print("validate")
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if not User.objects.filter(email=email).exists():
            if not User.objects.filter(username=username).exists():
                return JsonResponse({"status":True})
            else:
                return JsonResponse({"status":"UsernameIncorrect"}, safe=False)
        else:
            return JsonResponse({"status":"EmailIncorrect"}, safe=False)
    else:
        return JsonResponse({"status":"ok"})


def register(request):
    if request.method == 'POST':
        email = request.POST.get("_email")
        username = request.POST.get("usrname")
        password = request.POST.get("psw")
        user = User(email=email, username=username)
        user.set_password(password)
        user.save()            
        return render(request, 'account/register_done.html', {'user':user})
    else:
        return render(request, 'account/register.html')

def login_validate(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate( username = username, password = password)
        print(username, password)
        if user is not None:
            return JsonResponse({"status":"ok"})
        else:
            return JsonResponse({"status":"error"}, safe=False)
    else:
        return JsonResponse({"status":"ok"})

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get("usrname")
        password = request.POST.get("userpassword")
        user = authenticate(username = username, password = password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return redirect("/")
            else:
                return JsonResponse({"status":"Disabled account"}, safe=False)
        else:
            return JsonResponse('Invalid login', safe=False)
    else:
        return render(request, 'account/auth.html')

def user_logout(request):
    logout(request)
    return redirect("/")