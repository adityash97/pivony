from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView
from .serializers import ChartSerializer
from .models import Chart

class BarChartView(ListAPIView):
    queryset = Chart.objects.all()
    serializer_class = ChartSerializer
    
class PieChartView(ListAPIView):
    queryset = Chart.objects.all()
    serializer_class = ChartSerializer

class FunnelChartView(ListAPIView):
    queryset = Chart.objects.all()
    serializer_class = ChartSerializer

