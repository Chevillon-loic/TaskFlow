@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/board.css') }}" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('content')
    <h2>{{ $board->label }}</h2>
    <div class="addColumn">
        <button id="btnAddList">+ Ajoutez une liste</button>
    </div>

    <br>

    <div class="addTicket">
        <button id="btnAddTicket">+ Ajoutez un ticket</button>
    </div>

    <br>

    <div class="addComment">
        <button id="btnAddComment">+ Ajoutez un commentaire</button>
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
