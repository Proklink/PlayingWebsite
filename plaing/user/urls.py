
from . import views
from django.urls import path

app_name = 'user'

urlpatterns = [
    path('login_validate/', views.login_validate, name='login_validate'),
    path('logout/', views.user_logout, name='logout'),
    path('login/', views.user_login, name='login'),
    path('register/', views.register, name='register'),
    path('validate/', views.validate, name='validate'),
]
