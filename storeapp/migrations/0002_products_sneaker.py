# Generated by Django 2.2.17 on 2020-12-07 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('storeapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='sneaker',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products_sneaker', to='storeapp.Product'),
        ),
    ]