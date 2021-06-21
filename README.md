# Docker Container
current settings are fine for Development deployment, but some changes should be made for a production environment

you should have a .env file with the following envaronment variables defined
- DJANGO_SECRET
- DB_NAME
- DB_USERNAME
- DB_PASSWORD
- DB_HOSTNAME
- DB_PORT
- API_KEY_NAME
- API_KEY
## Launch
```sh
docker compose
```
# Extractor
For testing purpouses, the amount of pages to be extracted is set to 10, for it to extract all of them you shoul replace the second argument in the extract method in extractor/main.py to -1
```py
extract(db,-1)
```
that might take a while

## launch

```sh
python main.py
```
# Backend
## launch

```sh
bash deploy.sh
```

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


# Frontend

## Launch
```sh
npm start
```

Improvements
- catch players image url and show it
- current apikey based login should be changed for a real app
- optimize pagination storage, currently it just makes an other request, is the most common approach  (Amazon uses it) but it can be optimized