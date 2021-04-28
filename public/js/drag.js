
//ELEMENT A DEPLACER (TICKET)
function onDragStart(event) {
    event
    .dataTransfer
    .setData('text/plain', event.target.id);
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  let span = document.getElementById("span_data_url");

//LA DROPZONE (COLONNE)
document.querySelectorAll(".ticketDropZone").forEach(function(dropzone){
    dropzone.addEventListener("drop", async function(event){

        const id = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);

        dropzone.appendChild(draggableElement);
       //console.log(dropzone.getAttribute("data_id"))



        let url = span.getAttribute("data_url");

        let token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        const options = {
            method: "PUT",
            headers: {
                "X-CSRF-TOKEN": token
            },

        };

        try {
            const response = await fetch(url, options);
            console.log(response);
           // location.reload();
        } catch (error) {
            console.log(error);
        }

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
