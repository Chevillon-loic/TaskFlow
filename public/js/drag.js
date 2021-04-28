//ELEMENT A DEPLACER (TICKET)
function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

//LA DROPZONE (COLONNE)
document.querySelectorAll(".ticketDropZone").forEach(function(dropzone) {
    dropzone.addEventListener("drop", async function(event) {
        const id = event.dataTransfer.getData("text");
        const draggableElement = document.getElementById(id);

        let idC = dropzone.getAttribute("data_id");
        dropzone.appendChild(draggableElement);
        let span = document.getElementById("span_data_url");
        let url = span.getAttribute("data_url");
        console.log(url);

        let token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        let body = {
            column_id: idC
        };

        const options = {
            method: "PUT",
            headers: {
                "X-CSRF-TOKEN": token,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };

        try {
            const response = await fetch(url, options);
            console.log(response);
            // location.reload();
        } catch (error) {
            console.log(error);
        }

        event.dataTransfer.clearData();
    });
});

/*

  const draggables = document.querySelector('.boxTicket')
  const dropzone = document.querySelectorAll('.ticketDropZone')

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })
  })
*/
