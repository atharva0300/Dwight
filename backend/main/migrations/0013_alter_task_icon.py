# Generated by Django 4.2.1 on 2023-05-11 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_alter_task_completed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='icon',
            field=models.ImageField(blank=True, default='backend/icons/default/task.png', upload_to='backend/default'),
        ),
    ]