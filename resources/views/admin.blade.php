@extends('layouts.app')

@section('custom_styles')
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
@endsection

@section('content')


  <div class="containerAdmin">
    <h3><span class="spanTitle">DashBoard</span> Pannel de contrôle</h3>

    <div class="contentAdmin">

        <!-- Boite des Utilisateurs -->
        <div class="boxAdmin" id="adminProfilsUsers">
            <div class="leftBox">
                <div class="number">
                    <p>Numbre</p>
                </div>
                <div class="title">
                    <p>Title</p>
                </div>
            </div>
            <div class="rightBox"><img src="{{ asset('img/man.png') }}" alt=""></div>

        </div>

        <!-- Boite des Administrateurs -->
        <div class="boxAdmin " id="adminProfilTeam">
            <p>Profil team</p>
        </div>

        <!-- Boite des Tableaux -->
        <div class="boxAdmin" id="adminAllBoards">
            <p>All boards</p>
        </div>

</div>

@endsection
