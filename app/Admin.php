<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use Notifiable;

    protected $table = 'admins';
    protected $guarded = array();
}
