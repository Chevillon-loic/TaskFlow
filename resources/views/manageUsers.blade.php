<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
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
              <td>  <button>Supprimer</button></td>
            </form>
                </tr>

            @endforeach

            </table>
        </div>

        </div>
    </div>
</body>
</html>
