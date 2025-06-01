<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\notebook;

class NotebookController extends Controller
{
    public function create(Request $request){

        $params = [
            'action' => 'create',
            'mobile' => "tst",
        ];

        $data = $this->post($params);

        return $this->successResponse(json_decode($data), 200);
    }

    public function read() {
        $notebooks = notebook::all();

        return $this->successResponse(json_decode($notebooks), 200);
    }
}
