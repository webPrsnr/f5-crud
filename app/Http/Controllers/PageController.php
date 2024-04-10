<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(): View
    {
        return view("pages/list");
    }

    public function create(): View
    {
        return view("pages/new");
    }

    public function edit($id): View
    {
        return view("pages/edit", [
            "id" => $id,
        ]);
    }
}
