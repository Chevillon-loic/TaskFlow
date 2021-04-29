function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    setTimeout(() => {
        event.target.classList.add("drag-over");
    }, 0);
}

function onDragOver(event) {
    event.preventDefault();
    setTimeout(() => {
        event.target.classList.add("drag-over");
    }, 0);
    let ticket = document.querySelectorAll(".ticketDropZone");
    ticket.forEach(elem => {
        elem.style.height = "20px";
        elem.style.borderRadius = "5px";
        elem.style.margin = "10px 0";
        elem.style.backgroundColor = "rgb(200, 200, 200)";
    });
}

function onDragLeave(event) {
    event.preventDefault();

    setTimeout(() => {
        event.target.classList.remove("drag-over");
    }, 0);
}
async function onDrop(event) {
    setTimeout(() => {
        event.target.classList.remove("drag-over");
    }, 0);
    const id = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);

    event.target.appendChild(draggableElement);

    let idC = this.getAttribute("data_id");
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
    location.reload();
}

//LA DROPZONE LISTENER (COLONNE)
let ticket = document.querySelectorAll(".ticketDropZone");
ticket.forEach(function(dropzone) {
    dropzone.addEventListener("dragenter", onDragStart);
    dropzone.addEventListener("dragover", onDragOver);
    dropzone.addEventListener("dragleave", onDragLeave);
    dropzone.addEventListener("drop", onDrop);
});
