<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Product;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function index()
    {
        $result = [
            'countUser' => User::count('id'),
            'countProduct' => Product::count('id'),
        ];

        return response()->json($result, Response::HTTP_OK);
    }
}
