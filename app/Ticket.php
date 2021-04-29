<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    public function comment()
    {
        return $this->hasMany(Comment::class);
    }

    public function column()
    {
        return $this->belongsTo(Column::class);
    }
}
