<?php

namespace App\Http\Controllers;

use App\Admin;
use App\User;
use App\Board;
use App\Column;
use App\Ticket;

use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:web');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $numberUsers = User::select('id')->count();
        $numberBoards = Board::select('id')->count();
        $dataUsers = User::all();
        $dataBoards = Board::all();

        return view('admin', [
            'numberUsers' => $numberUsers,
            'dataUsers' => $dataUsers,
            'numberBoards' => $numberBoards,
            'dataBoards' => $dataBoards,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Admin  $column
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Admin  $column
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Admin  $column
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)

    {
        $modifUser = User::find($request->id);

        $modifUser->first_name = $request->first_name;
        $modifUser->last_name = $request->last_name;
        $modifUser->email = $request->email;

        $modifUser->save();

        return back()->with([
            'success' => 'Contenu modifié avec succès !'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Admin  $column
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        $deleteUser = User::find($request->id)->delete();
    }
}
