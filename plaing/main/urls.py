from .views import main, games_main_page, likes, like_check
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

app_name = 'main'
urlpatterns = [
    path('', main, name = 'main'),
    path('games/like_check/', like_check, name = 'like_check'),
    path('games/', games_main_page, name = 'games'),
    path('games/like/', likes, name = 'like')
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

