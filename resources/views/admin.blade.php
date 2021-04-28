@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
@endsection

@section('content')


  <div class="containerAdmin">
      <div id="headerPannel">
          <div id="ancre"> <a href="{{ route('home.index') }}">Home Page</a></div>

        <h3>Menu - Pannel Administrateur</h3>
    </div>


    <div class="contentAdmin">

        <!-- Boite des Utilisateurs -->
        <div class="boxAdmin" id="adminProfilsUsers">
            <p>Nombre de tableaux : {{ $numberUsers }}</p>
        </div>

        <!-- Boite des Administrateurs -->
        <div class="boxAdmin " id="adminProfilTeam">
            <p>Nombre de tableaux : x</p>
        </div>

        <!-- Boite des Tableaux -->
        <div class="boxAdmin" id="adminAllBoards">
            <p>Nombre de tableaux : {{ $numberBoards }}</p>
        </div>

<!-- // TOUS LES MODALS \\-->

<!-- Modale des profils-->
<div id="modalUsers" class="displayNone">
    <div id="modalContentUsers">
        <div class="modalButtons">
            <button id="cancelContentUsers">Retour</button>
        </div>
        <p>Tableau des utilisateurs enregistrés</p>
        <div id="tableUsers">
        <table>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Date de création</th>
                <th>Dernière mise à jour</th>
            </tr>

            @foreach ($dataUsers as $user)

            <tr>
            <td>{{ $user->id }}</td>
            <td>{{ $user->first_name }}<br>
                <input name="first_name"  type="text"></td>
            <td>{{ $user->last_name }}</td>
            <td>{{ $user->email }}</td>
            <td>{{ $user->password }}</td>
            <td>{{ $user->created_at }}</td>
            <td>{{ $user->updated_at }}</td>
            <td><input type="submit"></td>
        </tr>


        @endforeach

        </table>
    </div>

    </div>
</div>

<!-- Modale des Tableaux-->
<div id="modalBoards" class="displayNone">
    <div id="modalContentBoards">
        <div class="modalButtons">
            <button id="cancelContentBoards">Retour</button>
        </div>
        <p>Tableau des Boards</p>
        <div id="tableUsers">
        <table>
            <tr>
                <th>ID</th>
                <th>Owner</th>
                <th>Guest</th>
                <th>Label</th>
                <th>Color</th>
                <th>Date de création</th>
                <th>Dernière mise à jour</th>
            </tr>

            @foreach ($dataBoards as $board)
            <tr>
                <td>{{ $board->id }}</td>
                <td>{{ $board->owner_id }}</td>
                <td>{{ $board->guest_id }}</td>
                <td>{{ $board->label }}</td>
                <td>{{ $board->color }}</td>
                <td>{{ $board->created_at }}</td>
                <td>{{ $board->updated_at }}</td>
                <td><button>Modifier</button></td>
               <td> <button>Supprimer</button></td>
            </tr>
        @endforeach

        </table>
    </div>




    </div>
</div>
</div>

@section('custom_scripts')
    <script src="{{ asset('js/admin.js') }}" type="text/javascript"></script>
@endsection

@endsection
