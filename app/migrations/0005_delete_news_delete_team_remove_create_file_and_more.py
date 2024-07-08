# Generated by Django 4.2.5 on 2024-01-28 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_create_code'),
    ]

    operations = [
        migrations.DeleteModel(
            name='News',
        ),
        migrations.DeleteModel(
            name='Team',
        ),
        migrations.RemoveField(
            model_name='create',
            name='file',
        ),
        migrations.AddField(
            model_name='create',
            name='email',
            field=models.EmailField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='create',
            name='grade',
            field=models.CharField(default='10th', max_length=255),
        ),
        migrations.AddField(
            model_name='create',
            name='school',
            field=models.CharField(default='rasht-zone1-2-b', max_length=255),
        ),
    ]
