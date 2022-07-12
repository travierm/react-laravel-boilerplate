<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Database extends Model
{
    use HasFactory;

    public $automatedRoutes = [
        'validation' => [
            'title' => 'required|unique:posts|max:255',
            'body' => 'required',
        ]
    ];
}
