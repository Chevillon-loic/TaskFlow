<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
<<<<<<< HEAD
    <title>Tableaux - TaskFlow</title>
=======
    <title>TaskFlow - Gestion Tableau</title>
>>>>>>> 740d0d69001efb2f427c947ca7f4743d6374507b
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
</head>

<body>


    <!-- Modale des Tableaux-->
    <div id="modalBoards">
        <div id="modalContentBoards">
            <div id="headerBox">
                <div>
                    <p>Gestion des tableaux</p>
                </div>
                <div class="modalButtons">
                    <a href="{{ route('admin.index') }}">Retour</a>
                </div>
            </div>

            <div id="tableUsers">
                <table>
                    <tr>

                        <th>ID</th>
                        <th>Owner</th>
                        <th>Label</th>
                        <th>Color</th>
                        <th>Date de création</th>
                        <th>Dernière mise à jour</th>

                    </tr>

                    @foreach ($dataBoards as $board)
                        <tr>

                            <td>{{ $board->id }}</td>
                            <td>{{ $board->owner_id }}</td>
                            <td>{{ $board->label }}</td>
                            <td>{{ $board->color }}</td>
                            <td>{{ $board->created_at }}</td>
                            <td>{{ $board->updated_at }}</td>
                            <td><button id="btnModif">Modifier</button></td>
                            <td> <button id="btnDelete">Supprimer</button></td>

                        </tr>
                    @endforeach

                </table>
            </div>




        </div>
    </div>

</body>

</html>
