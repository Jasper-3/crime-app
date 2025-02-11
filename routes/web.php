<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::view('/{any?}', 'welcome')->where('any', '.*');

require __DIR__ . '/auth.php';
