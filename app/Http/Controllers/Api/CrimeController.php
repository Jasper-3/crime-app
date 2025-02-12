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
     * Search of the resource.
     */
    public function search(Request $request)
    {
        // Validate the request
        $request->validate([
            'query' => 'nullable|string', // Optional search query
            'year' => 'nullable|string', // Optional year filter
            'month' => 'nullable|string', // Optional month filter
            'day' => 'nullable|string', // Optional day filter
            'street' => 'nullable|string', // Optional street filter
        ]);

        // Start with a base query
        $query = CrimeSceneReport::query();

        // Apply filters if provided
        if ($request->has('query')) {
            $searchQuery = $request->input('query');
            $query->where(function ($q) use ($searchQuery) {
                $q->where('street', 'like', "%{$searchQuery}%")
                    ->orWhere('description', 'like', "%{$searchQuery}%")
                    ->orWhere('year', 'like', "%{$searchQuery}%")
                    ->orWhere('month', 'like', "%{$searchQuery}%")
                    ->orWhere('day', 'like', "%{$searchQuery}%");
            });
        }

        if ($request->has('year')) {
            $query->where('year', $request->input('year'));
        }

        if ($request->has('month')) {
            $query->where('month', $request->input('month'));
        }

        if ($request->has('day')) {
            $query->where('day', $request->input('day'));
        }

        if ($request->has('street')) {
            $query->where('street', 'like', "%{$request->input('street')}%");
        }

        // Apply sorting
        $sortOrder = $request->input('sort', 'asc'); // Default to ascending order
        $query->orderBy('id', $sortOrder);

        // Paginate the results
        $perPage = $request->input('per_page', 10); // Default to 10 items per page
        $results = $query->paginate($perPage);


        // Execute the query and return the results
        // $results = $query->get();
        return CrimeResource::collection($results);
    }

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
