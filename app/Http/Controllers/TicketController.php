<?php

namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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
        $ticket = new Ticket();
        $ticket->task = $request->task;
        $ticket->column_id = $request->column_id;
        $ticket->user_id = $request->user_id;
        $ticket->save();

        return response()->json('Le Fetch a fonctionn√©', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function show(Ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $ticket_id)
    {
        $ticket = Ticket::where('id', $ticket_id)->first();
        $ticket->column_id = $request->column_id;
        $ticket->save();
        return response("success");
    }

    public function updateTitle(Request $request, $id)
    {
        $ticket = Ticket::where('id', $id)->first();
        $ticket->task = $request->task;
        $ticket->save();
        return response("success");
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $ticket = Ticket::find($request->id)->delete();

        return back()->with($ticket, 200);
    }
}
