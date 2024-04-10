<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {
        $notes = Note::all();
        return response()->json($notes);
    }

    public function create(Request $request)
    {
        try {
            $validated = $request->validate([
                'message' => 'string',
                'description' => 'string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $th) {
            return response()->json($th->validator->errors(), 422);
        }

        $note = Note::create($validated);
        return response()->json($note);
    }

    public function show(string $id)
    {
        $note = Note::find($id);

        if (!$note) {
            return response()->json(['message' => 'Id not found'], 404);
        }

        return response()->json($note);
    }

    public function edit(Request $request, string $id)
    {
        try {
            $validated = $request->validate([
                'message' => 'string',
                'description' => 'string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $th) {
            return response()->json($th->validator->errors(), 422);
        }

        $note = Note::find($id);

        if (!$note) {
            return response()->json(['message' => 'Id not found'], 404);
        }

        $note->update(($validated));
        return response()->json($note);
    }

    public function destroy(string $id)
    {
        $note = Note::find($id);

        if (!$note) {
            return response()->json(['message' => 'Id not found'], 404);
        }

        $note->delete();
        return response()->json(['message' => 'Ok']);
    }
}
