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

        {{-- Column --}}
        <div class="allColumns">
            @foreach ($columns as $column)
                <div class="columnContainer">
                    <div class="columTitleDiv">
                        <div class="titleClosed">
                            <span class="columnTitle">

                                <p>{{ $column->label }}</p>
                                <button id="removeColumn">X</button>
                        </div>
                        <div id="modalContainer" class="displayNone">
                            <div id="removeConfirmationContainer" class="displayNone">
                                <p>Êtes vous sûr de vouloir supprimer cette liste ?</p>
                                <span>
                                    <div class="modalButtons">
                                    <button id="cancelRemoveColumn">Annuler</button>
                                    <form action="{{ route('column.destroy') }}" method="post">
                                        @csrf
                                        <input type="hidden" name="id" value="{{ $column->id }}">
                                        <button type="submit">Confirmer</button>
                                    </form>
                                </div>
                                </span>
                            </div>
                        </div>
                        </span>
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
                                <div id="modalContainerTicket" class="displayNoneTicket">
                                    <div id="removeConfirmationContainer" class="displayNoneTicket">
                                        <p>Êtes vous sûr de vouloir supprimer ce ticket ?</p>
                                        <span>
                                            <div class="modalButtons">
                                            <button id="cancelRemoveTicket">Annuler</button>
                                            <form action="{{ route('ticket.destroy') }}" method="post">
                                                @csrf
                                                <input type="hidden" name="id" value="{{ $ticket->id }}">
                                                <button type="submit">Confirmer</button>
                                            </form>
                                        </div>
                                        </span>
                                    </div>
                                </div>

                                 <!-- .Modal Affichage commentaire -->
                                 <div id="commentBackground">
                                    <div id="modalComment">
                                    {{ $ticket->task }}<br>
                                    <span id="closeModalComment">&times;</span>
                                    <button id="comment">Commentaire</button>
                                    <div id="commentContainer"></div>
                                    </div>
                                </div>
                            <!-- Fin Affichage Modal -->
                            </div>

                            @endif
                        @endforeach
                        <div class="addTicket">
                            <button id="btnAddTicket">+ Ajoutez un ticket</button>
                            <input type="hidden" id="columnId" value="{{ $column->id }}">
                        </div>
                    </div>
                </div>
            @endforeach


            <div class="addColumn" id="addColumn">
                <button id="btnAddList">+ Ajoutez une liste</button>
            </div>
        </div>
    </div>



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
