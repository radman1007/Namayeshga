# Generated by Django 4.2.5 on 2024-01-28 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_delete_news_delete_team_remove_create_file_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='create',
            name='code',
            field=models.CharField(max_length=11, unique=True),
        ),
    ]
