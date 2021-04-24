// Modal for home Page to Add Board

let modal = document.getElementById("displayModal");
let btn = document.getElementById("btnModal");
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let btnColor = document.getElementById('selectColor')
let blue = document.getElementById('colorBlue')
let red = document.getElementById('colorRed')
let card = document.getElementById("create-card")

btnColor.inputMode = function(){
    if (blue == true){
        card.style.backgroundColor = blue.value
    }

}
