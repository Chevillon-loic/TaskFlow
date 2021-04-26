@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/board.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')

    <div class="mainContainer">

            <div class="topContainer">

            <h2 id="titleTab">{{ $board->label }}</h2>

            {{--Invite user--}}
            <div class="containerInviteDelete">
            <div id="inviteContainer">
                <button id="invite">Inviter</button>
            </div>

            {{--Supprimer le tableau--}}

            <button id="deleteTab">Supprimer le tableau</button>
        </div>
    </div>
            <form action="{{ route('board.destroy') }}" method="post">
                @method('delete')
                @csrf
                <input type="hidden" name="id" value="{{ $board->id }}">
                <button type="submit" class="displayNone">Confirmer</button>
            </form>




        {{-- Column --}}
        <div class="allColumns">
            @foreach ($columns as $column)
                <div class="columnContainer">
                    <div class="columTitleDiv">
                        <div class="titleClosed">
                            <span class="columnTitle">

                                <p>{{ $column->label }}</p>
                                <button id="removeColumn"><i class="fas fa-times-circle"></i></button>
                        </div>
                    {{--Supprimer colonne/liste--}}
                        <div id="modalContainer" class="displayNone">
                            <div id="removeConfirmationContainer" class="displayNone">
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
                                                        @method('delete')
                                                        @csrf
                                                        <input type="hidden" name="id" value="{{ $ticket->id }}">
                                                        <button type="submit">Confirmer</button>
                                                    </form>
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    <!-- .Modal Affichage commentaire -->
                                    {{-- <div id="commentBackground">
                                            <div id="modalComment">
                                                {{ $ticket->task }}<br>
                                                <span id="closeModalComment">&times;</span>
                                                <button id="comment">Commentaire</button>
                                                <div id="commentContainer"></div>
                                            </div>
                                        </div> --}}
                                </div>
                                <!-- Fin Affichage Modal -->
                            @endif
                        @endforeach
<<<<<<< HEAD
                        {{--Ajouter ticket--}}
=======

                        {{-- Ajouter ticket --}}
>>>>>>> f6b9bbd309f7d7e73b0dd284019a17243fcfce05
                        <div class="addTicket">
                            <button id="btnAddTicket">+ Ajoutez un ticket</button>
                            <input type="hidden" id="columnId" value="{{ $column->id }}">
                        </div>
                    </div>
                </div>
            @endforeach
<<<<<<< HEAD

                {{--Ajouter colonne/liste--}}
=======
            {{-- Ajouter colonne/liste --}}
>>>>>>> f6b9bbd309f7d7e73b0dd284019a17243fcfce05
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
