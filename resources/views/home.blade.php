@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
@endsection
{{-- dd($boards) --}}
@section('content')
    <div class="container">
        <h1>Mes tableaux</h1>

        <div class="content-board">
            <!-- Foreach all boards (->owner_id) -->
            @foreach ($boards as $board)
                <div style="background-color:{{ $board->color }} " class="card-board">
                    <a href="{{ route('board.index', [$board->id]) }}" class="card-board-tr">
                        <p> {{ $board->label }}</p>
                    </a>
                </div>
            @endforeach

            <!-- Button for display Modal -->
            <div class="card-board">
                <button id="btnModal">
                    <span> <span class="plus">+</span><br> CRÉER UN <br>NOUVEAU TABLEAU</span>
                </button>
            </div>

            <!-- Div affichage modal -->
            <div id="displayModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">

                    <div class="modal-form">

                        <div class="modal-left" id="modalLeft">

                            <!-- Form add Board -->
                            <form action="{{ route('home.store') }}" method="POST">

                                @csrf

                                <!-- Input Label for board -->
                                <input id="inputTitle" name="label" type="text" placeholder="Ajoutez un titre au tableau"
                                    required pattern=".*\S.*"
                                    oninvalid="setCustomValidity('Veuillez entrer un titre de tableau valide. ')">
                                <span class="close">&times;</span>

                        </div>
                        <!-- Tablette color -->
                        <div class="modal-right">
                            <label for="color1" class="color color1">
                                <input type="radio" name="color" id="color1" value="#755286">
                            </label>

                            <label for="color2" class="color color2">
                                <input type="radio" name="color" id="color2" value="#7ba78b">
                            </label>

                            <label for="color3" class="color color3">
                                <input type="radio" name="color" id="color3" value="#b37b2c">
                            </label>

                            <label for="color4" class="color color4">
                                <input type="radio" name="color" id="color4" value="#ac4275">
                            </label>

                            <label for="color5" class="color color5">
                                <input type="radio" name="color" id="color5" value="#517f39">
                            </label>

                            <label for="color6" class="color color6 valid">
                                <input type="radio" name="color" id="color6" value="#61676b">
                            </label>

                            <label for="color7" class="color color7">
                                <input type="radio" name="color" id="color7" value="#1d70b4">
                            </label>

                            <label for="color8" class="color color8">
                                <input type="radio" name="color" id="color8" value="#963c2b">
                            </label>

                            <label for="color9" class="color color9">
                                <input type="radio" name="color" id="color9" value="#3a94ae">
                            </label>
                        </div>
                    </div>
                    <input id="buttonBoard" type="submit" value="Créer un tableau">
                    </form>
                </div>

            </div>

        </div>

    </div>
@endsection
