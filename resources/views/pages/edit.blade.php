@extends('layouts.index')
@section('content')
<div class="h-screen w-full">
    <div class="container h-100 w-full flex items-center justify-center">
        <form id="todos" class="rounded-xl border bg-card text-card-foreground shadow p-6 m-4 w-full lg:w-3/4 relative">
        <div id="loaderBackground" class="absolute w-full h-full top-0 left-0 bg-slate-50 opacity-80 hidden"></div>
        <div id="loaderSpinner" class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary absolute inset-0 m-auto hidden"></div>
            <div class="mb-4">
                <h1 class="text-4xl text-center">Изменить заметку</h1>
            </div>
            <div class="space-y-3">
                <div>
                    <label for="message" class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Заголовок заметки</label>
                    <input type="text" id="message" name="message" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-6 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Название заметки">
                </div>
                <div>
                <label for="description" class="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Описание заметки</label>
                <textarea type="text" id="description" name="description" class="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Описание заметки"></textarea>
            </div>
            </div>
            <div class="pt-4 flex justify-between">
                <button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 min-w-52 py-2">Сохранить</button>
                <button type="button" id="editDelete" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 min-w-52 py-2">Удалить</button>
            </div>
        </form>
    </div>
</div>
<script>
    const config = {
        api:{
            list: "{{ route('page.list') }}"
        },
        id: new URL(window.location.href).pathname.split("/")[2]
    }
</script>
@vite(['resources/js/pages/edit'])
@endsection