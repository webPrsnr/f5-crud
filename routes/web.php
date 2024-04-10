<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, "index"])->name('page.list');
Route::get('/notes/{id}/edit', [PageController::class, "edit"])->name('page.edit');
Route::get('/notes/create', [PageController::class, "create"])->name('page.create');
