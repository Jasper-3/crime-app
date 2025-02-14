<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CrimeController;
use App\Http\Controllers\Api\FlightController;
use App\Http\Controllers\Api\InterviewController;

Route::get('/crime/search', [CrimeController::class, 'search']);
Route::get('/interview/search', [InterviewController::class, 'search']);
Route::get('/flight/search', [FlightController::class, 'search']);
Route::apiResource('interview', InterviewController::class);
Route::apiResource('crime', CrimeController::class);

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });
