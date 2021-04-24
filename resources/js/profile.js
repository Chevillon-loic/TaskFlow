let buttonProfileModification = document.getElementById('buttonProfileModification');
let grayBackground = document.getElementById('grayBackground');
let buttonClose = document.getElementById('closeProfileModification');

buttonProfileModification.addEventListener('click', function(e){
    grayBackground.style.display = "flex";
})

buttonClose.addEventListener('click', function(e){
    grayBackground.style.display = "none";
})
