<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FlightResource;
use App\Models\Flight;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    public function search(Request $request)
    {
        // Validate the request
        $request->validate([
            'query' => 'nullable|string', // Optional search query
            'year' => 'nullable|string', // Optional year filter
            'month' => 'nullable|string', // Optional month filter
            'day' => 'nullable|string', // Optional day filter
            'hour' => 'nullable|string', // Optional hour filter
            'minute' => 'nullable|string', // Optional minute filter
        ]);

        // Start with a base query
        $query = Flight::query();

        // Apply filters if provided
        if ($request->has('query')) {
            $searchQuery = $request->input('query');
            $query->where(function ($q) use ($searchQuery) {
                $q->where('year', 'like', "%{$searchQuery}%")
                    ->orWhere('month', 'like', "%{$searchQuery}%")
                    ->orWhere('day', 'like', "%{$searchQuery}%")
                    ->orWhere('hour', 'like', "%{$searchQuery}%")
                    ->orWhere('minute', 'like', "%{$searchQuery}%");
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

        if ($request->has('hour')) {
            $query->where('hour', 'like', "%{$request->input('hour')}%");
        }

        // Apply sorting
        $sortOrder = $request->input('sort', 'asc'); // Default to ascending order
        $query->orderBy('id', $sortOrder);

        // Paginate the results
        $perPage = $request->input('per_page', 10); // Default to 10 items per page
        $results = $query->paginate($perPage);


        // Execute the query and return the results
        // $results = $query->get();
        return FlightResource::collection($results);
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

        $crimes = Flight::orderBy('id', $sortOder)->paginate(20);

        return FlightResource::collection($crimes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Flight $flight)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Flight $flight)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Flight $flight)
    {
        //
    }
}
