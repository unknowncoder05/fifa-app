#Backend Api
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
```sh
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@myproject.com', 'password')" | python manage.py shell
```

### Create Custom apikey
```py
python .\manage.py generatekey name key
```

Improvements
- database "team" model (updated from the api teams)
- automatic testing
- Clean custom apikey generation 