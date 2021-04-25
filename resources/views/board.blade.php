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
@endsection


<script>
    let board = @json($board);

</script>
@section('custom_scripts')
    <script src="{{ asset('js/board.js') }}"></script>
@endsection
