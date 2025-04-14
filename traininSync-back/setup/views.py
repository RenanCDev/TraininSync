from django.http import JsonResponse

def home(request):
    return JsonResponse({'mensagem': 'Bem-vindo a API! Use /api/traininsync/ para acessar os endpoints.'})
