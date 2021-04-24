@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/welcome.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="mainContainer">
        <a href="{{ route('welcome') }}"><img src="{{ asset('img/logoColor.png') }}" alt="logo"></a>
        <div class="connectionForm">
            <div class="connectionFormIN">
                <h2>SE CONNECTER</h2>
                <img src="{{ asset('img/Humaaans - 3 Characters.png') }}" alt="">
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div>
                        <label for="email">Email</label>
                        <div>
                            <input id="email" type="email" name="email" value="{{ old('email') }}" required
                                autocomplete="email" autofocus>
                            @error('email')
                                <br>
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div>
                        <label for="password">Mot de passe</label>
                        <div>
                            <input id="password" type="password" name="password" required autocomplete="current-password">
                            @error('password')
                                <br>
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <label class="form-check-label" for="remember">
                                Se souvenir de moi
                            </label>
                        </div>
                    </div>

                    <div>
                        <div class="connectBTN">
                            <button type="submit">
                                Connexion
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <p class="pBottom">Vous n'êtes pas inscrit ? <a href="{{ route('register') }}">Créer un compte</a></p>

    </div>
@endsection
