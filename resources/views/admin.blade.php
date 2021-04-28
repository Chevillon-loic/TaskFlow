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
        <div id="headerBox">
            <div>
                <p>Gestion des utilisateurs enregistrés</p>
            </div>
            <div class="modalButtons">
                <button id="cancelContentUsers">Retour</button>
            </div>



        </div>

        <div id="tableUsers">
        <table>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Date de création</th>
                <th>Dernière mise à jour</th>
            </tr>

            @foreach ($dataUsers as $user)
            <tr>
            <form action="{{route('admin.update')  }}" method="POST">

            @csrf
            <input type="hidden" name="id" value="{{ $user->id }}">
            <td>{{ $user->id }}</td>
            <td><input value="{{ $user->first_name }}" name="first_name" type="text"></td>
            <td><input value="{{ $user->last_name }}" name="last_name"  type="text"></td>
            <td><input value="{{ $user->email}}" name="email"  type="text"></td>
            <td>{{ $user->created_at }}</td>
            <td>{{ $user->updated_at }}</td>
            <td id="btnValidate"><button>Modifier</button></td>
        </form>
        <form action="{{ route('admin.destroy') }}" method="POST">
            @method('delete')
            @csrf
            <input type="hidden" name="id" value="{{ $user->id }}">
          <td> <button>Supprimer</button></td>
        </form>
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
