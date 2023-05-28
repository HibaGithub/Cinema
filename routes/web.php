<?php

use App\Http\Controllers\FilmsController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\filmGarllyController;
use App\Http\Controllers\FormcontactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\resirvationController;
use App\Http\Controllers\teamSectionController;
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
Route::get('/', function () {

        return Inertia::render('PAGE1/Accueil');
});
//  login
Route::get('/login', [AuthenticatedSessionController::class, 'create']);
Route::post('/login', [AuthenticatedSessionController::class, 'store']);

//  sigup
Route::get('/signup', [RegisteredUserController::class, 'create']);
Route::post('/signup', [RegisteredUserController::class, 'store']);

// logout
Route::get('/logout', [AuthenticatedSessionController::class, 'destroy']);

// forget password
Route::get('/forgetPassword', [PasswordResetLinkController::class, 'create'])->middleware('guest');
Route::post('/forgetPassword', [PasswordResetLinkController::class, 'store'])->middleware('guest');

Route::get('/reset-password/{token}', [NewPasswordController::class, 'create']);
Route::post('/reset-password', [NewPasswordController::class, 'store']);

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
Route::get('/horaire', [FilmsController::class, 'index']);
//  tarif
Route::get('/tarif', function () {
        return Inertia::render('PAGE3/Ttarif');
});

Route::get('/send', [FormcontactController::class, 'index']);
Route::post('/send',[FormcontactController::class, 'store']
);

// form resirvation tecket 
Route::get('/envoyer', [resirvationController::class, 'index']);
Route::post('/envoyer',[resirvationController::class, 'store']);

Route::get('/tecket', [filmGarllyController::class, 'index']);
Route::get('/tecket', [teamSectionController::class, 'index']);

// checkout page
Route::get('/payment', [PaymentController::class, "index"]);
Route::post('/charge', [PaymentController::class, "pay"]);
require __DIR__ . '/auth.php';
