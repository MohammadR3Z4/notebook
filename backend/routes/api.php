<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NotebookController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/note-book', [NotebookController::class, 'index']);
Route::get('/note-book/{id}', [NotebookController::class, 'show']);
Route::delete('/note-book/{id}', [NotebookController::class, 'delete']);
Route::post('/note-book', [NotebookController::class, 'store']);
