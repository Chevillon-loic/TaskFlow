@extends('layouts.app')
@section('title', 'TaskFlow - Gestion de projets')

@section('title')
    <title>Accueil - TaskFlow</title>
@endsection

@section('custom_styles')
    <link href="{{ asset('css/welcome.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="WelcomeMainContent">
        <div class="leftWelcomeMainContent">
            <img src="{{ asset('img/logoColor.png') }}" alt="Logo">
            <div class="pWelcomeMainContent">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid quia eos temporibus veniam
                    dolorum alias perferendis ad voluptates, inventore ducimus suscipit, molestias totam ea itaque iste,
                    reiciendis quo facere.
                </p>
            </div>
        </div>
        <div class="rightWelcomeMainContent">
            <img src="{{ asset('img/Humaaans - 3 Characters.png') }}" alt="Logo">
        </div>
    </div>
@endsection
