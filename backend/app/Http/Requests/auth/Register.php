<?php

namespace App\Http\Requests\auth;

use Illuminate\Foundation\Http\FormRequest;

class Register extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'profil' => 'required',
            'name' => 'required|string',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'tel' => 'required|string',
            'password' => 'required|string|min:4',
        ];
    }

    public function messages(): array
    {
        return [
            'profil.required' => 'Vous devez choisir un profil',
            'name.required' => 'Entrez un nom',
            'prenom.required' => 'Entrez votre prénom',
            'email.required' => 'Entrez votre e-mail',
            'email.email' => 'Entrez un email valide',
            'email.unique' => 'Cet email est déjà utilisé',
            'tel.required' => 'Entrez un numéro de téléphone',
            'password.required' => 'Entrez un mot de passe',
            'password.min' => 'Entrez au minimum 4 caractères',
        ];
    }
}
