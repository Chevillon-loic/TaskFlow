@extends('layouts.app')

@section('content')
<h1>profil</h1>

<a class="dropdown-item" href="{{ route('logout') }}"
        onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
        Se déconecter
    </a>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form>

<div>
    <img src="{{Auth::user()->picture}}" alt="Photo de profil">
    <p>{{ Auth::user()->first_name }}</p>
    <p>{{ Auth::user()->last_name }}</p>
    <p>{{ Auth::user()->email }}</p>
</div>

<form action="profile/update" method="POST">
@csrf

<label for="first_name">Prénom : </label>
<input type="text" id="first_name" name="first_name">

<label for="last_name">Nom : </label>
<input type="text" id="last_name" name="last_name">

<label for="email">E-mail : </label>
<input type="text" id="email" name="email">

<label for="password">Mot de passe : </label>
<input type="text" id="password" name="password">

<label for="picture">Photo : </label>
<input type="text" id="picture" name="picture">

<input type="submit">

</form>
@endsection
