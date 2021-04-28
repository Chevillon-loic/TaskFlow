
//ELEMENT A DEPLACER (TICKET)
function onDragStart(event) {
    event
    .dataTransfer
    .setData('text/plain', event.target.id);
  }

  function onDragOver(event) {
    event.preventDefault();
  }

//LA DROPZONE (COLONNE)
document.querySelectorAll(".ticketDropZone").forEach(function(dropzone){
    dropzone.addEventListener("drop", function(event){

        const id = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);

        dropzone.appendChild(draggableElement);
        console.log(dropzone)

        event.dataTransfer.clearData();
    })
})

/*

  const draggables = document.querySelector('.boxTicket')
  const dropzone = document.querySelectorAll('.ticketDropZone')

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })
  })
*/
