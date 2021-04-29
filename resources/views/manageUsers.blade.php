<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TaskFlow - Manage Users</title>
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
</head>

<body>
    <div id="modalUsers">
        <div id="modalContentUsers">
            <div id="headerBox">
                <div>
                    <p>Gestion des utilisateurs enregistrés</p>
                </div>
                <div class="modalButtons">
                   <a href="{{route('admin.index')  }}">Retour</a>
                </div>



            </div>

            <div id="tableUsers">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Photo de profil</th>
                    <th>Prénom</th>
                    <th>Nom</th>
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
                <td><img width="50px" style="border-radius: 50%" src="{{ $user->picture }}"></td>
                <td><input value="{{ $user->first_name }}" name="first_name" type="text"></td>
                <td><input value="{{ $user->last_name }}" name="last_name"  type="text"></td>
                <td><input value="{{ $user->email}}" name="email"  type="text"></td>
                <td>{{ $user->created_at }}</td>
                <td>{{ $user->updated_at }}</td>
                <td class="displayNone" > <button id="btnModif">Modifier</button></td>
            </form>
            <form action="{{ route('admin.destroy') }}" method="POST">
                @method('delete')
                @csrf
              <td class="displayNone">  <button id="btnDelete">Supprimer</button></td>
            </form>
                </tr>

            @endforeach

            </table>
        </div>



        <div id="boxAdd">
            <form action="{{ route('admin.store') }}" method="POST">
                @csrf
                <table>
                    <tr>
                        <th>Photo de profil</th>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Mot de passe</th>
                    </tr>
                    <tr>
                        <td><input type="text" value="{{ asset('img/man.png') }}" name="picture"></td>
                        <td> <input required type="text" name="first_name"></td>
                        <td><input required type="text" name="last_name"></td>
                        <td><input required type="email" name="email"></td>
                        <td><input required  type="text" name="password"></td>
                        <td><input id="btnValidate" type="submit" value="Créer"></td>
                    </tr>
                </table>

        </form>

        </div>
    </div>

    <script src="{{ asset('js/admin.js') }}" type="text/javascript"></script>

</body>
</html>
