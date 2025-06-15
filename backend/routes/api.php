<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NotebookController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/note-book', [NotebookController::class, 'index']);
Route::get('/note-book/{id}', [NotebookController::class, 'show']);
Route::delete('/note-book/{id}', [NotebookController::class, 'delete']);
Route::post('/note-book', [NotebookController::class, 'store']);
Route::put('/note-book/{id}', [NotebookController::class, 'update']);

// user
Route::prefix('user')->group(function () {
    Route::post('/register', [UserController::class, 'store']);
    Route::post('/login', [UserController::class, 'login']);

    Route::middleware('auth:sanctum')->get('/logout', function (Request $request) {
        return $request->user();
    });
});
