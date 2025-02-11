<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CrimeRequest;
use App\Http\Resources\CrimeResource;
use App\Models\CrimeSceneReport;
use Illuminate\Http\Request;

class CrimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CrimeResource::collection(CrimeSceneReport::paginate(20)); // Paginate with 10 items per page
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CrimeRequest $request)
    {
        $crime = CrimeSceneReport::create($request->validated());
        return new CrimeResource($crime);
    }

    /**
     * Display the specified resource.
     */
    public function show(CrimeSceneReport $crime)
    {
        return new CrimeResource($crime);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CrimeRequest $request, CrimeSceneReport $crime)
    {
        $crime->update($request->validated());
        return new CrimeResource($crime);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CrimeSceneReport $crime)
    {
        $crime->delete();
        return response()->noContent();
    }
}
