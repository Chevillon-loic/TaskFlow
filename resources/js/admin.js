const { Button } = require("bootstrap");
const { replace, remove } = require("lodash");

let btnProfilUsers = document.getElementById('adminProfilsUsers');
let modalUsers = document.getElementById('modalUsers');
let closeUsers = document.getElementById('cancelContentUsers')
btnProfilUsers.addEventListener('click',function(e){
    modalUsers.style.display ="block";

    closeUsers.addEventListener('click', function(e){
        modalUsers.style.display ="none";
    })
})

let adminAllBoards = document.getElementById("adminAllBoards")
let modalBoards = document.getElementById('modalBoards');
let cancelContentBoards = document.getElementById('cancelContentBoards')

adminAllBoards.addEventListener('click', function(e){
    modalBoards.style.display="block"
    cancelContentBoards.addEventListener('click', function(e){
        modalBoards.style.display = "none"
    })
})

let adminProfilTeam = document.getElementById("adminProfilTeam")


adminProfilTeam.addEventListener("click", function(e){
    alert("Pas encore disponible")
})

