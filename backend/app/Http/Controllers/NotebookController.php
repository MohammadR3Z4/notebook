<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotebookController extends Controller
{
    public function create(){
        $params = [
            'action' => 'getmvnoamount',
            'mobile' => "tst",
        ];

        $data = $this->post($params);

        return $this->successResponse(json_decode($data), 200);
    }
}
