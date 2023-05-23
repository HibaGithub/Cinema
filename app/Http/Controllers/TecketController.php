<?php

namespace App\Http\Controllers;

use App\Models\Films;
use Inertia\Inertia;
use App\Models\gallryFilms;
use App\Models\teamSection;
use Illuminate\Http\Request;

class TecketController extends Controller
{
    public function index(request $request)

    {
        $filmInfo = Films::where('id',$request->id)->get();
        $imageGallry = gallryFilms::where('idfilms',$request->id)->get();
        $teamMembers = teamSection::where('idfilms', $request->id)->get();
        $formInfo = Films::where('id', $request->id)->get();
         return inertia::render('pageTecket/tecket',compact("filmInfo","imageGallry", "teamMembers", "formInfo"));
  
    }

    
}
