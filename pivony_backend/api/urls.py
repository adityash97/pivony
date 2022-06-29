from django.urls import path
from .views import BarChartView,PieChartView,FunnelChartView
urlpatterns = [
    path('bar/'or'bar',BarChartView.as_view(),name="bar_chart"),
    path('pie/'or'pie',PieChartView.as_view(),name="pie_chart"),
    path('funnel/'or'funnel',FunnelChartView.as_view(),name="funnel_chart"),
]