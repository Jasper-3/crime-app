<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CrimeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "year" => ["'required', 'string'"],
            "month" => ["'required', 'string'"],
            "day" => ["'required', 'string'"],
            "street" => ["'required', 'string'"],
            "discription" => ["'required', 'string'"],

        ];
    }
}
