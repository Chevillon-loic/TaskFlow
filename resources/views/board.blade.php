@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/board.css') }}" rel="stylesheet">
@endsection

@section('content')
@endsection


<script>
    let board = @json($board);

</script>
