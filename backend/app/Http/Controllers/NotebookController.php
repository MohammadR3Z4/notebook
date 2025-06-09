<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\notebook;
use Illuminate\Support\Facades\Log;

class NotebookController extends Controller
{
    public function index() {
        $notebooks = notebook::orderBy('id' , "desc")->get();

        return $this->successResponse(json_decode($notebooks), 200);
    }

    public function show($id) {
        $book = notebook::findOrFail($id);

        return $this->successResponse(json_decode($book), 200);
    }

    public function store(Request $request){
        
        // $validator = Validator::make($request->all(), [
        //     'title' => ['required'],
        //     'description' => ['required'],
        // ]);

        // if ($validator->fails()) {
        //     return $this->errorResponse($validator->messages(), 422);
        // }

        $notebook = new notebook();
        $data = $request->input('data');

        $notebook->title = $data["title"];
        $notebook->description = $data["description"];
        // $notebook->file = $data["file"];
        $notebook->text = $data["text"];
        $notebook->save();

        $response = ["result" => "success" , "code" => "200"];
        return $this->successResponse($response, 200);
    }

    public function delete($id) {
        notebook::destroy($id);

        $response = ["result" => "success" , "desc" => "record $id successfully deleted" ,"code" => "200"];
        return $this->successResponse($response, 200);
    }
}
