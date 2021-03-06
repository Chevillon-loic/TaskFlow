@extends('layouts.app')
@section('title', 'TaskFlow - ' . $board->label)

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

            <h2 id="titleTab" data_url="{{ route('board.update', [$board->id]) }}">
                {{ $board->label }}</h2>

            @if ($board->owner_id == $user->id)
                {{-- Invite user --}}
                <div class="containerInviteDelete">
                    <div id="inviteContainer">
                        <button id="invite">Inviter</button>
                    </div>

                    {{-- Supprimer le tableau --}}
                    <button id="deleteTab">Supprimer le tableau</button>
                </div>
            @else
                <div class="containerInviteDelete" style="display: none">
                    <div id="inviteContainer">
                        <button id="invite">Inviter</button>
                    </div>

                    {{-- Supprimer le tableau --}}
                    <button id="deleteTab">Supprimer le tableau</button>
                </div>
            @endif
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
                                <p id="plabelColumn" data_url="{{ route('column.update', [$column->id]) }}">
                                    {{ $column->label }}</p>
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
                                            <input type="hidden" class="id" name="id" value="{{ $column->id }}">
                                            <button type="submit">Confirmer</button>
                                        </form>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    {{-- Ticket --}}
                    <div class="ticketContainer">
                        <div class="ticketDropZone" data_id="{{ $column->id }}" ondragover="onDragOver(event);">
                        </div>
                        @foreach ($tickets as $ticket)
                            @if ($ticket->column_id == $column->id)
                                <div class="ticketDropZone" data_id="{{ $column->id }}" ondragover="onDragOver(event);">
                                    <div class="boxTicket" draggable="true" id="draggableElement{{ $ticket->id }}"
                                        ondragstart="onDragStart(event)">

                                        <span data_url="{{ route('ticket.update', [$ticket->id]) }}"
                                            id="span_data_url"></span>

                                        <div class="ticket">
                                            <div class="taskTicket">
                                                {{ $ticket->task }}
                                                <img src="{{ asset('images/trash.png') }}" alt="">
                                            </div>
                                            <div class="cxlTicket">
                                                <button id="removeTicket"> <img src="{{ asset('images/trash.png') }}"
                                                        alt=""> </button>
                                            </div>
                                        </div>


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
                                                            <input type="hidden" name="id" class="id"
                                                                value="{{ $ticket->id }}">
                                                            <button type="submit">Confirmer</button>
                                                        </form>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>


                                        {{-- Modal comment --}}
                                        <div id="modalContainerComment">
                                            <div id="removeConfirmationContainerComment">
                                                {{-- <div class="etiquettes">
                                                    <label for="ecolor1" class="ecolor ecolor1">
                                                        <input type="radio" name="ecolor" id="ecolor1" value="#62bd50">
                                                    </label>

                                                    <label for="ecolor2" class="ecolor ecolor2">
                                                        <input type="radio" name="ecolor" id="ecolor2" value="#f2d602">
                                                    </label>

                                                    <label for="ecolor3" class="ecolor ecolor3">
                                                        <input type="radio" name="ecolor" id="ecolor3" value="#fda426">
                                                    </label>

                                                    <label for="ecolor4" class="ecolor ecolor4">
                                                        <input type="radio" name="ecolor" id="ecolor4" value="#eb5b46">
                                                    </label>

                                                    <label for="ecolor5" class="ecolor ecolor5">
                                                        <input type="radio" name="ecolor" id="ecolor5" value="#c278e0">
                                                    </label>

                                                    <label for="ecolor6" class="ecolor ecolor6 valid">
                                                        <input type="radio" name="ecolor" id="ecolor6" value="#007abf">
                                                    </label>

                                                    <button id="addEtiquette">Add etiquette</button>

                                                </div> --}}
                                                <div class="titleTicketTop">
                                                    <div class="titleLeft">
                                                        <h3 class="titleTicket"
                                                            data_url="{{ route('ticket.updatetitle', [$ticket->id]) }}">
                                                            {{ $ticket->task }}</h3>

                                                        <button class="cancelComment">X</button>
                                                    </div>
                                                </div>


                                                <div id="containerComment">
                                                    <div>
                                                        <textarea name=""
                                                            data_url="{{ route('comment.store', [$ticket->id]) }}"
                                                            id="addComment" class="addComment" cols="30" rows="3"
                                                            placeholder="Écrivez un commentaire"></textarea>
                                                    </div>
                                                    <div id="flexReverse">
                                                        @foreach ($comments as $comment)

                                                            @if ($comment->ticket_id == $ticket->id)
                                                                <div class="userInformations">
                                                                    <img class="pictureComment"
                                                                        src="{{ $user->picture }}" alt="picture">

                                                                    <div class="contentComment">
                                                                        <span>{{ $comment->user->last_name }}
                                                                            {{ $comment->user->first_name }}</span><br>
                                                                        <p>{{ $comment->description }}</p>
                                                                    </div>

                                                                </div>

                                                            @endif

                                                        @endforeach
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                        {{-- Ajouter ticket --}}
                        <div class="addTicket">
                            <button id="btnAddTicket"><span>+</span>Ajoutez un ticket</button>
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
    let user = @json($user);

</script>
@section('custom_scripts')
    <script src="{{ asset('js/comment.js') }}"></script>
    <script src="{{ asset('js/ticket.js') }}"></script>
    <script src="{{ asset('js/board.js') }}"></script>
    <script src="{{ asset('js/drag.js') }}"></script>

@endsection
