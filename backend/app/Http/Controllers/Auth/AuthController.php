<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Enregistre un nouvel utilisateur.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $messages = [
            'profil.required' => 'Le profil est obligatoire.',
            'name.required' => 'Le nom est obligatoire.',
            'prenom.required' => 'Le prénom est obligatoire.',
            'prenom.max' => 'Le prénom ne peut pas dépasser 255 caractères.',
            'email.required' => 'L\'adresse e-mail est obligatoire.',
            'email.email' => 'L\'adresse e-mail n\'est pas valide.',
            'email.unique' => 'L\'adresse e-mail est déjà utilisée.',
            'tel.required' => 'Le numéro de téléphone est obligatoire.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.min' => 'Le mot de passe doit contenir au moins 4 caractères.',
        ];

        $validatedData = $request->validate([
            'profil' => 'required',
            'name' => 'required|string',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'tel' => 'required|string',
            'password' => 'required|string|min:4',
        ], $messages);

        $user = User::create([
            'profil' => $validatedData['profil'],
            'name' => $validatedData['name'],
            'prenom' => $validatedData['prenom'],
            'email' => $validatedData['email'],
            'tel' => $validatedData['tel'],
            'password' => Hash::make($validatedData['password']),
        ]);

        if ($user) {

            $token = $user->createToken($user->name . 'auth_token')->plainTextToken;

            return response()->json([
                'token' => $token,
                'token_type' => 'Bearer',
                'user' => $user,
                'message' => 'Compte créé avec succès'
            ], 201);
        } else {
            return response()->json([

                'message' => 'Il y\'a eu une erreur lors de l\'inscription'
            ], 500);
        }
    }

    /**
     * Connecte un utilisateur existant.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $messages = [
            'email.required' => 'L\'adresse e-mail est obligatoire.',
            'email.email' => 'L\'adresse e-mail n\'est pas valide.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.min' => 'Le mot de passe doit contenir au moins 4 caractères.',
        ];

        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:4',
        ], $messages);



        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Email ou mot de passe incorrecte'
            ], 401);
        }

        $user = User::where('email', $validatedData['email'])->firstOrFail();

        if (!($validatedData['remember'] ?? false)) {
            $user->tokens()->delete();
        }

        $token = $user->createToken($user->name . 'auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
            'token_type' => 'Bearer',
            'message' => 'Connexion réussie',
        ], 200);
    }

    /**
     * Déconnecte l'utilisateur actuel.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $user = User::Where('id', $request->user()->id)->first();

        if ($user) {

            $user->tokens()->delete();

            return response()->json([
                'message' => 'Déconnexion réussie',
            ], 200);
        }else {

            return response()->json([
                'message' => 'Non trouvé',
            ], 404);
        }
    }
}
