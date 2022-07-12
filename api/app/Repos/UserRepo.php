<?php

namespace App\Repos;

use App\Models\User;

class UserRepo
{
    public function isDuplicate(string $email): bool
    {
        return User::where('email', $email)->exists();
    }
}
