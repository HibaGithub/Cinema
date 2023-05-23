<?php

namespace App\Http\Controllers;

use inertia\inertia;
use App\Models\teamSection;
use Illuminate\Http\Request;

class teamSectionController extends Controller
{
    public function index()

    {
        $props = teamSection::all();
        
        return inertia::render('pageTecket/tecket', ['props' => $props]);
    }
}
