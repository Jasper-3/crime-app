<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CrimeSceneReport extends Model
{
    use HasFactory;
    protected $table = "crime_scene_reports";

    protected $fillable = [
        "year",
        "month",
        "day",
        "street",
        "description",
    ];
    public $timestamps = false;
}
