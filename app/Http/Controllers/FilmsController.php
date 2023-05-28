<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Films;
use App\Models\Salle;
use Illuminate\Http\Request;
// use App\Models\Salle;

class FilmsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
   
    {
        $Films=Films::all();
        // $imageGallry =Salle::all();
        return inertia::render('PAGE2/Horaire',['films'=> $Films]);
       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
