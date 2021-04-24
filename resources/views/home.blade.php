@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="container">
        <h1>Mes tableaux</h1>


    <div class="content-board">


        @foreach ($boards as $board )
        <div style="background-color:{{$board->color}} " class="card-board">
        <p> {{$board->label}}</p>
        </div>
        @endforeach

        <div class="card-board">
        <button id="btnModal"><p>Créer un nouveau tableau</p></button>
    </div>

        <div id="displayModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
              <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Ajouter un tableau</h2>
              </div>

              <div class="modal-form">
                <form action="{{route('board.store')}}" method="POST">
                    @csrf


                    <label  for="">Nom du tableau</label>
                    <input name="label" type="text">
<label for="">Couleur</label>
<input type="color" name="color">


                    <input type="submit">
                </form>
              </div>
            </div>

          </div>

    </div>

        </div>
@endsection
