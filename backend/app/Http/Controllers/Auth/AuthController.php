<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Models\Besoin;
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
            'photo.image' => 'Le fichier doit être une image',
            'photo.mimes' => 'Le fichier doit être de type jpeg, png, jpg, gif ou svg',
            'photo.max' => 'Le fichier ne doit pas dépasser 2 Mo',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.min' => 'Le mot de passe doit contenir au moins 4 caractères.',
        ];

        $validatedData = $request->validate([
            'profil' => 'required',
            'name' => 'required|string',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'tel' => 'required|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'password' => 'required|string|min:4',
        ], $messages);

        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photoName = time() . '.' . $photo->extension();
            $photo->move(public_path('profil'), $photoName);
        } else {
            $photoName = 'default.png';
        }

        $user = User::create([
            'profil' => $validatedData['profil'],
            'name' => $validatedData['name'],
            'prenom' => $validatedData['prenom'],
            'email' => $validatedData['email'],
            'tel' => $validatedData['tel'],
            'photo' => $photoName,
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
        } else {

            return response()->json([
                'message' => 'Non trouvé',
            ], 404);
        }
    }


    /**
     * Display a listing of the users.
     */
    public function listUsers()
    {
        $users = User::all();
        return response()->json([
            "message" => "Liste des utilisateurs",
            $users
        ]);
    }

    /**
     * Display the specified user.
     */
    public function showUser(string $id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    /**
     * Update the specified user in storage.
     */
    public function updateUser(Request $request, string $id)
    {
        $user = User::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
        ]);

        $user->update($validatedData);

        return response()->json([
            'message' => 'Compte mis à jour',
            'user' => $user
        ]);
    }

    /**
     * Remove the specified user from storage.
     */
    public function destroyUser(string $id)
    {
        $user = User::findOrFail($id);

        $besoin = Besoin::findOrFail($id);

        // Supprimer les annonces liées à l'utilisateur
        $besoin->delete();

        $user->delete();

        return response()->json([
            'message' => 'Compte supprimé'
        ]);
    }
}
