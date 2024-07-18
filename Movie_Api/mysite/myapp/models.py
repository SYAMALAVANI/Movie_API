from django.db import models

# Create your models here.
class Movie(models.Model):
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=200)
  rating = models.FloatField()
  image = models.ImageField(upload_to='Images', default='Images/None/sampleImg.jpg')
  def __str__(self) -> str:
    return self.name
