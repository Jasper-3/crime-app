<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CrimeController;

Route::get('/crime/search', [CrimeController::class, 'search']);
Route::apiResource('crime', CrimeController::class);

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });
