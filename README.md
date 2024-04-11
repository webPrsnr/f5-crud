# f5-crud

CRUD на PHP-фреймворке Laravel.

### технологии

- [Laravel 10](https://laravel.com/docs/10.x)
- [jQuery](https://jquery.com/), [jquery-validation](https://github.com/jquery-validation/jquery-validation), [toastify-js](https://github.com/apvarun/toastify-js)
- [tailwind](https://tailwindcss.com/)
- [antfu's eslint-config](https://github.com/antfu/eslint-config)

### запуск dev-сервера

Переключить php на версию 8.3

```sh
sudo update-alternatives --config php
```

Локально склонировать репозиторий:
```sh
git clone git@github.com:webPrsnr/f5-crud.git && cd f5-crud
```

Создать `database.sqlite`:
```sh
touch database/database.sqlite
```

Загрузить зависимости:
```sh
composer install
npm install
```

Запустить миграцию:
```sh
php artisan migrate
```

Запустить dev-сервер:
```sh
php artisan serve
npm run dev
```
