<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'TaskFlow') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
</head>

<body>
    <div class="containerAdmin">
        <div id="headerPannel">
            <div id="ancre"> <a href="{{ route('home.index') }}">Home Page</a></div>

          <h3>Menu - Pannel Administrateur</h3>
      </div>


      <div class="contentAdmin">

          <!-- Boite des Utilisateurs -->

          <a href="{{ route('admin.users') }}"><div class="boxAdmin" id="adminProfilsUsers">
            <p>Nombre d'utilisateurs : {{ $numberUsers }}</p>
        </div></a>

          {{-- <!-- Boite des Administrateurs -->
          <div class="boxAdmin " id="adminProfilTeam">
              <p>Nombre de tableaux : x</p>
          </div> --}}

          <!-- Boite des Tableaux -->
          <a href="{{ route('admin.boards') }}"><div class="boxAdmin" id="adminAllBoards">
            <p>Nombre tableaux : {{ $numberBoards }}</p>
        </div></a>


  </div>

  @section('custom_scripts')
      <script src="{{ asset('js/admin.js') }}" type="text/javascript"></script>
  @endsection


</body>
</html>

