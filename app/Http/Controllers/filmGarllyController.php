<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\FilmGarlly;
use Illuminate\Http\Request;

class filmGarllyController extends Controller
{
    public function index()

    {
        $filmgallry = FilmGarlly::all();
        return inertia::render('pageTecket/tecket', ['filmgallry' => $filmgallry]);
    }

}
