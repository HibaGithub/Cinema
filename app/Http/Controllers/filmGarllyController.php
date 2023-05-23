<?php

namespace App\Http\Controllers;

use App\Models\Films;
use Inertia\Inertia;
use App\Models\gallryFilms;
use Illuminate\Http\Request;

class filmGarllyController extends Controller
{
    public function index()

    {
        $imageGallry = gallryFilms::all();
        info( 1);
        return inertia::render('pageTecket/tecket', ['imageGallry ' => $imageGallry]);
    }

}
