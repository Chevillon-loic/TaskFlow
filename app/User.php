<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password', 'picture',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Provide many Board for User
    public function board()
    {
        return $this->hasMany(Board::class);
    }
    // Provide many Ticket for User
    public function ticket()
    {
        return $this->hasMany(Ticket::class);
    }
    // Provide many Comments for User
    public function comment()
    {
        return $this->hasMany(Comment::class);
    }
    // Provide many guests for User
    public function guest()
    {
        return $this->hasMany(Guest::class);
    }
    public function boards()
    {
        return $this->belongsToMany(Board::class, 'guests', 'guest_id', 'board_id');
    }
}
