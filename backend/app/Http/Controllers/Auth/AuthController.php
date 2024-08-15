<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Http\Controllers\Controller;
use App\Http\Requests\auth\Register;

class AuthController extends Controller
{
    public function register(Register $request)
    {
        $validatedData = $request->validated();


        $user = User::create([
            'profil' => $validatedData['profil'],
            'name' => $validatedData['name'],
            'prenom' => $validatedData['prenom'],
            'email' => $validatedData['email'],
            'tel' => $validatedData['tel'],
            'password' => Hash::make($validatedData['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        if ($user) {
            return response()->json([

                'access_token' => $token,
                'token_type' => 'Bearer',
                'profil' => $validatedData['profil'],
                'name' => $validatedData['name'],
                'prenom' => $validatedData['prenom'],
                'tel' => $validatedData['tel'],
                'email' => $validatedData['email'],
                'message' => 'Compte créé avec success'
            ]);
        }
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'email invalide'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'message' => 'Bienvenue'
        ]);
    }

    public function logout()
    {
        return response()->json([
            'message' => 'Déconnexion réussite',
        ]);
    }
}
