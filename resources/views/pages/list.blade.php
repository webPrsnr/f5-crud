@extends('layouts.index')
@section('content')

<div class="h-screen w-full">
    <div class="container h-100 w-full flex items-center justify-center ">
        <div class="relative rounded-xl border bg-card text-card-foreground shadow p-6 m-4  w-full lg:w-3/4">
        <div id="loaderBackground" class="absolute w-full h-full top-0 left-0 bg-slate-50 opacity-80 hidden"></div>
        <div id="loaderSpinner" class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary absolute inset-0 m-auto hidden"></div>
            <div class="mb-4">
                <h1 class="text-4xl text-center">Список заметок</h1>
            </div>
            <div id="notesWrapper" class="space-y-3 min-h-72">
            </div>
            <div class="pt-4">
                <button id="newNote" data-route="{{ route('page.create') }}" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-16 py-2">Добавить</button>
            </div>
        </div>
    </div>
</div>
<script>
    const config = {
        api:{
            edit: "{{ route('page.edit', ['BLANK']) }}"
        }
    }
</script>
@vite(['resources/js/pages/list'])
@endsection