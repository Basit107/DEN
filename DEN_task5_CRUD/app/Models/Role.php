<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name'];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    // use HasFactory;
    public function hasRole($role)
    {
        return $this->roles()->where('name', $role)->exists();
    }
}
