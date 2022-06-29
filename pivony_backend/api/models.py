from django.db import models

# Create your models here.
class Chart(models.Model):
    paramA = models.CharField(max_length = 50,null=True)
    paramB = models.IntegerField(null=True)

    def __str__(self):
        return self.paramA
    
