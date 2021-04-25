@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/profile.css') }}" rel="stylesheet">

@endsection

@section('content')
<div class="mainContainer">



    <div class="profile">

        <img id="profilePicture" src="{{Auth::user()->picture}}" alt="Photo de profil">
        <p>{{ Auth::user()->first_name }}</p>
        <p>{{ Auth::user()->last_name }}</p>
        <p>{{ Auth::user()->email }}</p>

        <button id="buttonProfileModification">Modification</button>

        {{-- disconnect button --}}
    <a class="dropdown-item" href="{{ route('logout') }}"
    onclick="event.preventDefault();
        document.getElementById('logout-form').submit();">
    Se déconecter
</a>

<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    @csrf
</form>
    </div>

    <div id="grayBackground">
        <div class="profileModificationForm">
            <div class="profileModificationFormIn">
                <button id="closeProfileModification">x</button>
                <h2>Modifier votre profil</h2>
                <form action="profile/update" method="POST">
                @csrf

                <div>
                    <label for="first_name">Prénom</label>
                    <div>
                        <input type="text" id="first_name" name="first_name" value="{{ Auth::user()->first_name }}">
                    </div>
                </div>

                <div>
                    <label for="last_name">Nom</label>
                    <div>
                        <input type="text" id="last_name" name="last_name" value="{{ Auth::user()->last_name }}">
                    </div>
                </div>

                <div>
                    <label for="email">E-mail</label>
                    <div>
                        <input type="text" id="email" name="email" value="{{ Auth::user()->email }}">
                    </div>
                </div>

                <div>
                    <label for="password">Mot de passe</label>
                    <div>
                        <input type="text" id="password" name="password">
                    </div>
                </div>

                <div>
                    <label for="picture">Photo</label>
                    <div>
                        <input type="text" id="picture" name="picture">
                    </div>
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
</div>

@section('custom_scripts')
    <script src="{{ asset('js/profile.js') }}" type="text/javascript"></script>
@endsection

@endsection
