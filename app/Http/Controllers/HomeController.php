<?php

namespace App\Http\Controllers;

use App\Board;
use App\Guest;
use App\User;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        /* $boards = Board::select(['id', 'label', 'color'])
            ->where('owner_id', \Auth::user()->id); */
        $boards = Board::select(['id', 'label', 'color'])
            ->where('owner_id', \Auth::user()->id);

        return view("home", [

            'boards' => $boards->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('home');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate formulaire add Board
        $request->validate(
            [
                'label' => 'required',
            ],
            [
                'label.required' => 'Un Titre est requis.',
            ],
        );
        $request->color ?? $request->color = '#61676b';
        $board = new Board();
        $board->owner_id = \Auth::user()->id;
        $board->label = $request->label;
        $board->color = $request->color;
        $board->save();

        return back()->with([
            'success' => 'Contenu envoyé avec succès !',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function show(Board $board)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function edit(Board $board)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Board $board)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function destroy(Board $board)
    {
        //
    }
}
