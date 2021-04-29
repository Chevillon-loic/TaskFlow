<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    public function user()
    {
        return $this->belongsToMany(User::class);
    }
    public function board()
    {
        return $this->belongsToMany(Board::class);
    }
}
