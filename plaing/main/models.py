from django.db import models
from django.conf import settings

# Create your models here.
class GamesModel(models.Model):
    game_name = models.CharField(max_length = 50)
    image = models.ImageField(upload_to = 'images/%Y/%m/%d/')
    description = models.TextField(blank = True)
    users_like = models.ManyToManyField(settings.AUTH_USER_MODEL,
                                        related_name = 'games_liked',
                                        blank = True)
    users_dislike = models.ManyToManyField(settings.AUTH_USER_MODEL,
                                        related_name = 'games_disliked',
                                        blank = True)