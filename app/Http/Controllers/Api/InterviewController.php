<?php

namespace App\Http\Controllers\Api;

use App\Models\Interview;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\InterviewRequest;
use App\Http\Resources\InterviewResource;

class InterviewController extends Controller
{
    public function search(Request $request)
    {
        // Validate the request
        $request->validate([
            'query' => 'nullable|string', // Optional search query
            'year' => 'nullable|string', // Optional year filter
            'month' => 'nullable|string', // Optional month filter
            'day' => 'nullable|string', // Optional day filter
            'transcript' => 'nullable|string', // Optional street filter
        ]);

        // Start with a base query
        $query = Interview::query();

        // Apply filters if provided
        if ($request->has('query')) {
            $searchQuery = $request->input('query');
            $query->where(function ($q) use ($searchQuery) {
                $q->where('transcript', 'like', "%{$searchQuery}%")
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

        if ($request->has('transcript')) {
            $query->where('transcript', 'like', "%{$request->input('transcript')}%");
        }

        // Apply sorting
        $sortOrder = $request->input('sort', 'asc'); // Default to ascending order
        $query->orderBy('id', $sortOrder);

        // Paginate the results
        $perPage = $request->input('per_page', 10); // Default to 10 items per page
        $results = $query->paginate($perPage);


        // Execute the query and return the results
        // $results = $query->get();
        return InterviewResource::collection($results);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sortOder = request('sort', 'asc');

        if (!in_array($sortOder, ['asc', 'desc'])) {
            $sortDirection = 'asc';
        }

        $crimes = Interview::orderBy('id', $sortOder)->paginate(20);

        return InterviewResource::collection($crimes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(InterviewRequest $request)
    {
        $crime = Interview::create($request->validated());
        return new InterviewResource($crime);
    }

    /**
     * Display the specified resource.
     */
    public function show(Interview $interview)
    {
        return new InterviewResource($interview);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(InterviewRequest $request, Interview $interview)
    {
        $interview->update($request->validated());
        return new InterviewResource($interview);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Interview $interview)
    {
        $interview->delete();
        return response()->noContent();
    }
}
