@push('scripts')
    @vite(['resources/js/app.js'])
    @vite('resources/css/app.css')
@endpush

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel CRUD</title>
    @stack('scripts')
</head>
<body>
    @yield('content')
</body>
</html>