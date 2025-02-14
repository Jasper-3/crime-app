<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    protected $table = "flights";

    protected $fillable = [
        "origin_airport_id",
        "destination_airport_id",
        "year",
        "month",
        "day",
        "hour",
        "minute",
    ];

    public $timestamps = false;
}
