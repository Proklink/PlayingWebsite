from django.contrib import admin
from .models import GamesModel
# Register your models here.


@admin.register(GamesModel)
class GamesModelAdmin(admin.ModelAdmin):
    list_display = ['game_name', 'description', 'image']
