<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();
        $data = $request->input('data');

        $duplicate = User::where('email', $data["email"])->first();
        if ($duplicate) {
            $response = ["status" => 409, "message" => "This email already exists"];
            return response()->json($response, 409);
        } else {
            $user->email = $data["email"];
            $user->password = Hash::make($data["password"]);
            $user->save();

            $response = ["result" => "success", "code" => "201"];
            return $this->successResponse($response, 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);


        $user = Auth::user();
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'httpCode' => 404,
                'message' => 'User not found.'
            ], 404);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'httpCode' => 401,
                'message' => 'Incorrect password.'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'httpCode' => 200,
            'data' => [
                'token' => $token,
                'user' => [
                    'id' => $user["id"],
                    'email' => $user["email"],
                ],
            ],
        ]);
    }
}
