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
- database team model (updated from the api teams)
- The extraction process uses backend api as the main way to insert elements to the DB, but this can be optimized by directly connecting to it
- automatic testing