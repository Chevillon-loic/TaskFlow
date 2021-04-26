@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/board.css') }}" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')

    <div class="mainContainer">
        <h2 id="titleTab">{{ $board->label }}</h2>
        <div id="inviteContainer">
            <button id="invite">Inviter</button>
        </div>

        <div class="allColumns">
        @foreach ($columns as $column)
            <div class="columnContainer">
                <div class="columTitleDiv">
                    <span class="columnTitle">
                        <p>{{ $column->label }}</p>
                        <button id="removeColumn">X</button>
                        <div class="removeConfirmation">
                            <p>Êtes vous sûr de vouloir supprimer cette colonne ?</p>
                            <span>
                                <button>Annuler</button>
                                <form action="{{ route('column.destroy') }}" method="post">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $column->id }}">
                                    <button type="submit">Confirmer</button>
                                </form>
                            </span>
                        </div>
                </div>
                </span>

                <div class="ticketContainer">
                    @foreach ($tickets as $ticket)
                        @if ($ticket->column_id == $column->id)

                            <span class="ticket">
                                {{ $ticket->task }}
                            </span>

                        @endif
                    @endforeach
                    <div class="addTicket">
                        <button id="btnAddTicket">+ Ajoutez un ticket</button>
                        <input type="hidden" id="columnId" value="{{ $column->id }}">
                    </div>
                </div>
            </div>
        @endforeach


        <div class="addColumn">
            <button id="btnAddList">+ Ajoutez une liste</button>
        </div>
    </div>
        <div class="addComment" style="display:none">
            <button id="btnAddComment">+ Ajoutez un commentaire</button>
        </div>
    </div>
@endsection


<script>
    let board = @json($board);
    let column = @json($column);
    let user = @json($user);

</script>
@section('custom_scripts')
    <script src="{{ asset('js/comment.js') }}"></script>
    <script src="{{ asset('js/ticket.js') }}"></script>
    <script src="{{ asset('js/board.js') }}"></script>

@endsection
