let btn = document.getElementById('adminProfilsUsers');
let modal1 = document.getElementById('modalUsers');
let btn1 = document.getElementById('cancelContentUsers')
btn.addEventListener('click',function(e){
    modal1.style.display ="block";

    btn1.addEventListener('click', function(e){
        modal1.style.display ="none";
    })
})

let btn2 = document.getElementById("adminAllBoards")
let modal2 = document.getElementById('modalBoards');
let closeModalBoards = document.getElementById('cancelContentBoards')

btn2.addEventListener('click', function(e){
    modal2.style.display="block"
    closeModalBoards.addEventListener('click', function(e){
        modal2.style.display = "none"
    })
})
