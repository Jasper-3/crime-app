<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Interview extends Model
{
    protected $table = "interviews";

    protected $fillable = [
        "year",
        "month",
        "day",
        "transcript",

    ];
    public $timestamps = false;
}
