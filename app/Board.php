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
    public function users()
    {
        return $this->belongsToMany(User::class, 'guests', 'board_id', 'guest_id');
    }
    public function guest()
    {
        return $this->belongsToMany(Guest::class, 'guests', 'board_id', 'guest_id');
    }
    public function user()
    {
        return $this->hasMany(User::class);
    }
}
