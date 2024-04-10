<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;

Route::get('/notes', [NoteController::class, "index"]);
Route::post('/notes/create', [NoteController::class, "create"]);
Route::put('/notes/{id}/edit', [NoteController::class, "edit"]);
Route::get('/notes/{id}', [NoteController::class, "show"]);
Route::delete('/notes/{id}', [NoteController::class, "destroy"]);
