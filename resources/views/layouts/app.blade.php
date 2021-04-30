<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

<<<<<<< HEAD
    @yield('title')

    <link rel="icon" href="{{ URL::asset('favicon.ico') }}" type="image/x-icon"/>
=======
    <title>@yield('title')</title>
>>>>>>> 740d0d69001efb2f427c947ca7f4743d6374507b

    {{-- Favicon --}}
    <link rel="icon" href="{{ asset('images/favicon.ico') }}">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @yield('custom_styles')
</head>

<body>

    <!-- Navbar -->
    @auth
        <div id="navbar">
            <a href="{{ route('home.index') }}"><img class="logo" src="{{ asset('img/logoWhite.png') }}" alt="Logo"></a>
            <nav>
                @if (Route::has('login'))
                    <div>
                        @auth
                            <a class="linkToProfile" href="{{ route('user.index') }}">
                                <img src="{{ asset(Auth::user()->picture) }}" alt="">
                                <span>{{ Auth::user()->first_name }} {{ Auth::user()->last_name }}</span></a>
                        @else
                            <a href="{{ route('login') }}">Connection</a>
                            @if (Route::has('register'))
                                <a href="{{ route('register') }}">Inscription</a>
                            @endif
                        @endauth
                    </div>
                @endif
            </nav>
        </div>
    @else
        @if (Str::contains(url()->current(), ['login', 'register']))
            <div id="navbarforRnC">
            </div>
        @else
            <div id="navbarNotConnected">
                <nav>
                    <div>
                        <a class="connectionBtn" href="{{ route('login') }}">CONNEXION</a>
                        <a class="registerBtn" href="{{ route('register') }}">INSCRIPTION</a>
                    </div>
                </nav>
            </div>
        @endif
    @endauth


    <main>
        @yield('content')
    </main>


    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    @yield('custom_scripts')
</body>

</html>
