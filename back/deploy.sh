python manage.py makemigrations --noinput
python manage.py migrate --noinput
#echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@mail.com', 'password')" | python manage.py shell
#python manage.py generatekey $API_KEY_NAME $API_KEY
python manage.py runserver 0.0.0.0:8000