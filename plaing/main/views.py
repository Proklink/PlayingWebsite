from django.shortcuts import render
from .models import GamesModel
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from common.decorators import ajax_required
from django.db import models

# Create your views here.
def main(request):
    return render(request, 'base.html')

@login_required
def games_main_page(request):
    games = GamesModel.objects.all()
    context = {"games": games}
    return render(request,'games.html', context=context)

@ajax_required
@login_required
@require_POST
def likes(request):
    game_id = request.POST.get('id')
    action = request.POST.get('action')
    print(game_id, action)
    if game_id and action:
        if (action == 'like') or (action == 'unlike'):
            try:
                game = GamesModel.objects.get(id=game_id)
                if action == 'like':
                    game.users_like.add(request.user)
                    print("LIKE")
                    print(game.users_dislike.all())
                    if (request.user in game.users_dislike.all()):
                        game.users_dislike.remove(request.user)
                else:
                    game.users_like.remove(request.user)
                    print("REMOVE LIKE")
            except:
                pass
        if (action == 'dislike') or (action == 'undislike'):
            try:
                game = GamesModel.objects.get(id=game_id)
                if action == 'dislike':
                    game.users_dislike.add(request.user)
                    print("DISLIKE")
                    if (request.user in game.users_like.all()):
                        game.users_like.remove(request.user)
                else:
                    game.users_dislike.remove(request.user)
                    print("REMOVE DISLIKE")
            except:
                pass
    return JsonResponse({'status': 'ok', 'id':game_id})

def like_check(request):
    games = []

    for game in GamesModel.objects.all():
        games.append((game.id, game.users_like.count(), game.users_dislike.count()))

    return JsonResponse({'status': 'ok', 'games':games})