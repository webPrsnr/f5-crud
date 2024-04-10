<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(): View
    {
        return view("notes/index");
    }

    public function create(): View
    {
        return view("notes/new");
    }

    public function edit($id): View
    {
        return view("notes/edit", [
            "id" => $id,
        ]);
    }
}
