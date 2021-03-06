<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserBoard extends Model
{

    protected $table = "user_board";
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function board()
    {
        return $this->belongsTo(Board::class);
    }
}
