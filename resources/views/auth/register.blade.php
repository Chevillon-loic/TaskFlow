@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/welcome.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="mainContainer">
        <a href="{{ route('welcome') }}"><img src="{{ asset('img/logoColor.png') }}" alt="logo"></a>
        <div class="registerForm">
            <div class="registerFormIN">
                <h2>CRÉER UN COMPTE</h2>
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div>
                        <label for="first_name">Prénom</label>
                        <div>
                            <input id="first_name" type="text"
                                class="form-control @error('first_name') is-invalid @enderror" name="first_name"
                                value="{{ old('first_name') }}" required autocomplete="first_name" autofocus>
                            @error('first_name')
                                <br>
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div>
                        <label for="last_name">Nom</label>
                        <div>
                            <input id="last_name" type="text" class="form-control @error('last_name') is-invalid @enderror"
                                name="last_name" value="{{ old('last_name') }}" required autocomplete="last_name"
                                autofocus>
                            @error('last_name')
                                <br>
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div>
                        <label for="email">Email</label>

                        <div>
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                                name="email" value="{{ old('email') }}" required autocomplete="email">
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
                            <input id="password" type="password"
                                class="form-control @error('password') is-invalid @enderror" name="password" required
                                autocomplete="new-password">
                            @error('password')
                                <br>
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div>
                        <label for="password-confirm">Confirmation du mot de passe</label>

                        <div>
                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                                required autocomplete="new-password">
                        </div>
                    </div>

                    <div>
                        <div>
                            <button type="submit">
                                S'incrire
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <p class="pBottom">Déja inscrit ? <a href="{{ route('login') }}">Me connecter</a></p>
    </div>
@endsection
