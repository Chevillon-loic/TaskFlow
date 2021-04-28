<?php

namespace App\Http\Controllers;

use App\Board;
use App\Column;
use App\Guest;
use App\Ticket;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {

        $columns = Column::all()->where('board_id', $id);
        $tickets = Ticket::all();

        return view('board', [
            'columns' => $columns,
            'tickets' => $tickets,
            'board' => Board::where('id', $id)->first(),
            'column' => Column::where('id', 1),
            'user' => User::where('id', \Auth::user()->id)->first(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'label' => 'required |string |max:64 |min:2',
            'board_id' => 'required |integer'
        ]);
        $column = new Column();
        $column->label = $request->label;
        $column->board_id = $request->board_id;
        $column->save();

        return response()->json(['success' => 'Le Fetch a fonctionné'], 200);
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
    public function update(Request $request, $id)
    {
        $request->validate([
            'label' => 'string|min:2'
        ]);

        $board = Board::find($id);
        $board->label = $request->label;
        $board->save();
        return response("success");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Board::find($request->id)->delete();
        return redirect()->route('home.index');
    }

    public function search(Request $request)
    {
        $users = User::where('first_name', 'like', '%' . $request->q . '%',)
            ->orWhere('last_name', 'like', '%' . $request->q . '%',)
            ->orWhere('email', 'like', '%' . $request->q . '%',)
            ->get();

        return response()->json($users);
    }

    public function guestinvite($tabId, $guestId)
    {
        $guests = Guest::first();
        //if (isset($guests)) {
        //  if (!($guests->guest_id == $guestId && $guests->board_id == $tabId)) {
        \DB::insert('insert into guests (guest_id, board_id) values (?, ?)', [$guestId, $tabId]);
        return response("success");
        // }
        //}
    }
}
