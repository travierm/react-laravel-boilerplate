<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repos\UserRepo;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterUserRequest;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthController extends Controller
{
    public function __construct(public UserRepo $userRepo)
    {
    }

    public function postRegister(RegisterUserRequest $request)
    {
        if ($this->userRepo->isDuplicate($request->email)) {
            //throw new BadRequestHttpException('duplicate user');
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
       ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
}
