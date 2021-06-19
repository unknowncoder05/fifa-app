## Launch


## make migrations 
```py
python manage.py makemigrations
```

## run migrations
```py
python manage.py migrate
```

### Create SuperUser
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@myproject.com', 'password')" | python manage.py shell


Improvements
- database "team" model (updated from the api teams)
- automatic testing