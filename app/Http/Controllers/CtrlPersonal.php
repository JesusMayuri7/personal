<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Models\Personal;
use Illuminate\Support\Facades\DB;


class CtrlPersonal extends Controller
{
    public function show()
    {
        $data=Personal::get();
        return response()
            ->json(['descripcion' => "Listado de Personal",
                'data' => $data]);
    }

    public function index($dni)
    {
        $personal=Personal::where('dni',$dni)->get();
        return response()
            ->json(['descripcion' => "Busqueda de Personal",
                'data' => $personal]);
    }

    public function delete($dni)
    {
        $personal=Personal::where('dni',$dni)->delete();
        return response()
            ->json(['descripcion' => "Eliminado de Personal",
                'data' => $personal]);
    }

    public function create(Request $request)
    {
        $nuevo=new Personal;
        $nuevo->dni=$request->json()->get("dni");
        $nuevo->apaterno=$request->json()->get("apaterno");
        $nuevo->amaterno=$request->json()->get("amaterno");
        $nuevo->nombres=$request->json()->get("nombres");
        $nuevo->direccion=$request->json()->get("direccion");
        $nuevo->telefono=$request->json()->get("telefono");
        $nuevo->save();
        return response()
            ->json(['descripcion' => "Creacion de Personal",
                'data' => $request->json()->get("nombres")]);
    }

    public function update(Request $request)
    {
        $nuevo=Personal::firstOrNew(['dni'=>$request->input("dni")]);         
        $nuevo->apaterno=$request->input("apaterno");
        $nuevo->amaterno=$request->input("amaterno");
        $nuevo->nombres=$request->input("nombres");
        $nuevo->direccion=$request->input("direccion");
        $nuevo->telefono=$request->input("telefono");
        $nuevo->save();
        //$dni = $request->json()->get("dni");
        //$password = $request->json()->get("nombres");
        //return $request->json()->all();
        //return $request->input('email');
        //return \App\User::where('hola', 'jesus@gmail.com')->first();
        return response()
            ->json(['descripcion' => "Creacion de Personal",
                'data' => $request->input("apaterno")]);
    }
}
