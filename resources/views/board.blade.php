@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/board.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')

    <div class="mainContainer">

        <div class="topContainer">

            <h2 id="titleTab">{{ $board->label }}</h2>

            {{-- Invite user --}}
            <div class="containerInviteDelete">
                <div id="inviteContainer">
                    <button id="invite">Inviter</button>
                </div>

                {{-- Supprimer le tableau --}}

                <button id="deleteTab">Supprimer le tableau</button>
            </div>
        </div>

        {{-- Modal tableau --}}

        <div id="modalContainerTAB" class="displayNone">
            <div id="removeConfirmationContainerTAB">
                <p>Êtes vous sûr de vouloir supprimer ce tableau ?</p>
                <span>
                    <div class="modalButtons">
                        <button id="cancelRemoveColumnTAB">Annuler</button>
                        <form action="{{ route('board.destroy') }}" method="post">
                            @method('delete')
                            @csrf
                            <input type="hidden" name="id" value="{{ $board->id }}">
                            <button type="submit">Confirmer</button>
                        </form>
                    </div>
                </span>
            </div>
        </div>

        {{-- Column --}}
        <div class="allColumns">
            @foreach ($columns as $column)
                <div class="columnContainer">
                    <div class="columTitleDiv">
                        <div class="titleClosed">
                            <span class="columnTitle">
                                <p>{{ $column->label }}</p>
                                <button id="removeColumn"><i class="fas fa-times-circle"></i></button>
                            </span>
                        </div>
                        {{-- Supprimer colonne/liste --}}
                        <div id="modalContainer" class="displayNone">
                            <div id="removeConfirmationContainer">
                                <p>Êtes vous sûr de vouloir supprimer cette liste ?</p>
                                <span>
                                    <div class="modalButtons">
                                        <button id="cancelRemoveColumn">Annuler</button>
                                        <form action="{{ route('column.destroy') }}" method="post">
                                            @method('delete')
                                            @csrf
                                            <input type="hidden" name="id" value="{{ $column->id }}">
                                            <button type="submit">Confirmer</button>
                                        </form>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    {{-- Ticket --}}
                    <div class="ticketContainer">
                        @foreach ($tickets as $ticket)
                            @if ($ticket->column_id == $column->id)

                                <div class="boxTicket">

                                    <span class="ticket">
                                        {{ $ticket->task }}
                                        <button id="removeTicket">X</button>
                                    </span>

                                    {{-- Modal ticket --}}
                                    <div id="modalContainerTicket" class="displayNoneTicket">
                                        <div id="removeConfirmationContainer" class="displayNoneTicket">
                                            <p>Êtes vous sûr de vouloir supprimer ce ticket ?</p>
                                            <span>
                                                <div class="modalButtons">
                                                    <button id="cancelRemoveTicket">Annuler</button>
                                                    <form action="{{ route('ticket.destroy') }}" method="post">
                                                        @method('delete')
                                                        @csrf
                                                        <input type="hidden" name="id" value="{{ $ticket->id }}">
                                                        <button type="submit">Confirmer</button>
                                                    </form>
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    {{-- Modal comment --}}
                                    <div id="modalContainerComment" class="displayNone">
                                        <div id="removeConfirmationContainer" class="displayNone">
                                            <button id="cancelComment">Annuler</button>
                                            <p>comment</p>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                        {{-- Ajouter ticket --}}
                        <div class="addTicket">
                            <button id="btnAddTicket">+ Ajoutez un ticket</button>
                            <input type="hidden" id="columnId" value="{{ $column->id }}">
                        </div>
                    </div>
                </div>
            @endforeach
            {{-- Ajouter colonne/liste --}}
            <div class="addColumn" id="addColumn">
                <button id="btnAddList">+ Ajoutez une liste</button>
            </div>
        </div>
    </div>
@endsection


<script>
    let tickets = @json($tickets);
    let board = @json($board);
    let column = @json($column);
    let user = @json($user);

</script>
@section('custom_scripts')
    <script src="{{ asset('js/comment.js') }}"></script>
    <script src="{{ asset('js/ticket.js') }}"></script>
    <script src="{{ asset('js/board.js') }}"></script>

@endsection
