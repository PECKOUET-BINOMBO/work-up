<?php
namespace App\Http\Controllers;

use App\Models\Besoin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{
    /**
     * Display a listing of the resources.
     */
    public function index()
    {
        $besoins = Besoin::all();
        return response()->json([
            "message"=>"Liste des besoins",
            $besoins
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $messages = [
            'titre.required' => 'Le titre est obligatoire.',
            'titre.max' => 'Le prénom ne peut pas dépasser 50 caractères.',
            'details.required' => 'Les détails pour votre annonce sont obligatoires.',
            'details.max' => 'Les détails ne doivent pas dépasser 500 caractères.',
        ];

        $validatedData = $request->validate([
            'titre' => 'required|string|max:50',
            'details' => 'required|string|max:500',
            'budget' => 'required',
            'user_id' => 'required|exists:users,id'
        ], $messages);

        $besoin = Besoin::create([
            'titre' => $validatedData['titre'],
            'details' => $validatedData['details'],
            'budget' => $validatedData['budget'],
            'user_id' => $validatedData['user_id']
            // 'user_id' => Auth::id()
        ]);

        return response()->json([
            'message' => 'Annonce ajoutée',
            'besoin' => $besoin
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $besoin = Besoin::findOrFail($id);
        return response()->json($besoin);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $besoin = Besoin::findOrFail($id);

        $messages = [
            'titre.required' => 'Le titre est obligatoire.',
            'titre.max' => 'Le prénom ne peut pas dépasser 50 caractères.',
            'details.required' => 'Les détails pour votre annonce sont obligatoires.',
            'details.max' => 'Les détails ne doivent pas dépasser 500 caractères.',
        ];

        $validatedData = $request->validate([
            'titre' => 'required|string|max:50',
            'details' => 'required|string|max:500',
            'budget' => 'required',
        ], $messages);

        $besoin->update([
            'titre' => $validatedData['titre'],
            'details' => $validatedData['details'],
            'budget' => $validatedData['budget'],

        ]);

        return response()->json([
            'message' => 'Annonce mise à jour',
            'besoin' => $besoin
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $besoin = Besoin::findOrFail($id);
        $besoin->delete();

        return response()->json([
            'message' => 'Annonce supprimée'
        ]);
    }
}
