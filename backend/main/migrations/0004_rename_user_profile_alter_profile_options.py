# Generated by Django 4.2.1 on 2023-05-08 07:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_task_creationdatetime'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='Profile',
        ),
        migrations.AlterModelOptions(
            name='profile',
            options={'verbose_name_plural': 'Profiles'},
        ),
    ]
