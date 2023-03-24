<?php

use App\Http\Controllers\FilmsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// Route::get('/post',function(){
// return Inertia::render('posts/indexing');
// });
Route::get('/',function(){

        return Inertia::render('PAGE1/Accueil');
 });
//  login
Route::get('/login', function () {
        return Inertia::render('login/log-in');
});
//  sigup
Route::get('/sigup', function () {
        return Inertia::render('login/signup');
});
// categorie
Route::get('/categorie', function () {
        return Inertia::render('PAGE1/pagecontente');
});
// new movie
Route::get('/new-movie', function () {
        return Inertia::render('PAGE1/newmovieslide');
});

// top movie
Route::get('/top-movie', function () {
        return Inertia::render('PAGE1/movieslide');
});

// horaire page
Route::get('/horaire', [FilmsController::class,'index']);

require __DIR__.'/auth.php';
