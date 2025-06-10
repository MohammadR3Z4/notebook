<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class notebook extends Model
{

    use HasFactory;

    // define table
    protected $table = "notebooks";

    // access to chanhge 
    protected $fillable = ['title', 'description', 'text'];
}
