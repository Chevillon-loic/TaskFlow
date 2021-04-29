<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    // Provide one user for Board
    /*     public function user()
    {
        return $this->hasOne(User::class);
    } */

    public function column()
    {
        return $this->hasMany(Column::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function user_board()
    {
        return $this->hasMany(UserBoard::class);
    }

    /*     public function user()
    {
        return $this->hasMany(User::class);
    } */
}
