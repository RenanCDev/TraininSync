# pylint: skip-file
# Generated by Django 5.2 on 2025-06-28 01:35
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("traininsync", "0006_registrodeprogresso_imc_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="agenda",
            name="reserva",
        ),
        migrations.AlterField(
            model_name="aluno",
            name="bioimpedancia",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="contratodeservico",
            name="horario",
            field=models.ForeignKey(
                blank=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="contratos",
                to="traininsync.agenda",
            ),
        ),
    ]
