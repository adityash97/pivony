# Generated by Django 4.0.5 on 2022-06-27 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='linechart',
            name='paramA',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='linechart',
            name='paramB',
            field=models.IntegerField(null=True),
        ),
    ]
