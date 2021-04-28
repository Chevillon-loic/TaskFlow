<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Column extends Model
{
    protected $fillable = [
        'label'
    ];

    public function ticket()
    {
        return $this->hasMany(Ticket::class);
    }

    public function board()
    {
        return $this->belongsTo(Board::class);
    }
}
