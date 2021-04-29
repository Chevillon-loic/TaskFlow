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
        return $this->belongsToMany(User::class, 'user_board', 'board_id', 'user_id');
    }

    /*     public function user()
    {
        return $this->hasMany(User::class);
    } */
}
