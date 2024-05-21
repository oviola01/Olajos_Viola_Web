<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    public function index(){
        return Szavak::all();
    }

    public function showTema($id){
        $szavak=DB::table("szavaks")->where("temaId",$id)->get();
        return $szavak;
    }
}
