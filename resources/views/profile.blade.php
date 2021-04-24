@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/profile.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="mainContainer">

    {{-- disconnect button --}}
    <a class="dropdown-item" href="{{ route('logout') }}"
        onclick="event.preventDefault();
            document.getElementById('logout-form').submit();">
        Se déconecter
    </a>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form>

    <div>
        <img id="profilePicture" src="{{Auth::user()->picture}}" alt="Photo de profil">
        <p>{{ Auth::user()->first_name }}</p>
        <p>{{ Auth::user()->last_name }}</p>
        <p>{{ Auth::user()->email }}</p>
    </div>

    <div class="profileModificationForm">
        <div class="profileModificationFormIn">
            <h2>Modifier votre profil</h2>
            <form action="profile/update" method="POST">
            @csrf

            <div>
                <label for="first_name">Prénom : </label>
                <input type="text" id="first_name" name="first_name">
            </div>

            <div>
                <label for="last_name">Nom : </label>
                <input type="text" id="last_name" name="last_name">
            </div>

            <div>
                <label for="email">E-mail : </label>
                <input type="text" id="email" name="email">
            </div>

            <div>
                <label for="password">Mot de passe : </label>
                <input type="text" id="password" name="password">
            </div>

            <div>
                <label for="picture">Photo : </label>
                <input type="text" id="picture" name="picture">
            </div>

            <div>
                <button type="submit">
                    Modifier
                </button>
            </div>

            </form>
        </div>
    </div>
</div>
@endsection
