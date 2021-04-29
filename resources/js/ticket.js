const ADDTICKETDIV = document.getElementsByClassName("addTicket");
const BTNADDTICKET = document.getElementById("btnAddTicket");
const divAddTicket = document.querySelector(".addTicket");

for (const ticket of ADDTICKETDIV) {
    let t = ticket.getElementsByTagName("input");
    let id = t[0].value;
    let btnAdd = ticket.getElementsByTagName("button");

    btnAdd[0].addEventListener("click", function(e) {
        let input = document.createElement("input");
        let btn = document.createElement("button");
        let close = document.createElement("button");
        btnAdd[0].style.display = "none";

        btn.innerText = "Ajouter";
        btn.id = "validateTicket";
        btn.style.backgroundColor = board.color;
        close.innerText = "X";
        close.id = "closeTicket";

        ticket.insertAdjacentElement("beforeend", input);
        ticket.insertAdjacentElement("beforeend", btn);
        ticket.insertAdjacentElement("beforeend", close);
        input.select();
        input.placeholder = "Titre du ticket...";
        input.id = "inputAddTicket";
        input.style.borderColor = board.color;

        close.addEventListener("click", function(e) {
            input.remove();
            btn.remove();
            close.remove();
            btnAdd[0].style.display = "initial";
        });

        btn.addEventListener("click", async function(e) {
            let url = document.location.origin + "/ticket/store/" + board.id;
            let token = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            let task = input.value;

            let body = {
                column_id: id,
                user_id: user.id,
                task: task
            };

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": token
                },
                body: JSON.stringify(body)
            };

            if (task.length > 2) {
                try {
                    const response = await fetch(url, options);
                    location.reload();
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
                input.value = "";
                input.remove();
                btn.remove();
                close.remove();
                btnAdd[0].style.display = "initial";
            } else {
                input.value = "";
            }
        });
    });
}
let DIVTICKET = document.getElementsByClassName("boxTicket");

for (const tick of DIVTICKET) {
    const titleTicket = tick.querySelector(".ticket");
    let btnSupp = tick.querySelector("#removeTicket");
    let titleTicketInTicket = tick.querySelector(".titleTicketTop");

    let divModalTicket = tick.querySelector("#modalContainerTicket");

    let cancelRemoveTicket = tick.querySelector("#cancelRemoveTicket");

    btnSupp.addEventListener("click", function(e) {
        divModalTicket.style.display = "block";
        commentModal.style.display = "none";
        for (const e of DIVTICKET) {
            e.draggable = true;
            console.log(e);
        }
    });

    cancelRemoveTicket.addEventListener("click", function(e) {
        divModalTicket.style.display = "none";
        location.reload();
    });

    let commentModal = tick.querySelector("#modalContainerComment");
    let cancelComment = tick.querySelector(".cancelComment");
    let addComment = tick.querySelector(".addComment");
    commentModal.style.display = "none";

    let b = document.createElement("button");
    b.id = "btnAddComment";
    b.style.backgroundColor = board.color;
    addComment.addEventListener("click", function(e) {
        addComment.style.borderColor = board.color;

        b.innerText = "Valider";
        addComment.insertAdjacentElement("afterend", b);
        b.style.display = "block";
    });

    b.addEventListener("click", async function(e) {
        b.style.display = "none";
        addComment.style.border = "2px solid rgba(0, 0, 0, 0.2)";

        let url = addComment.getAttribute("data_url");
        let token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        let comment = addComment.value;

        let body = {
            description: comment,
            user_id: user.id
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": token
            },
            body: JSON.stringify(body)
        };
        if (comment.length > 2) {
            try {
                const response = await fetch(url, options);
                addComment.value = "";
                location.reload();
                for (const e of DIVTICKET) {
                    e.draggable = false;
                    console.log(e);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            addComment.value = "";
        }
    });

    titleTicket.addEventListener("click", function(e) {
        let DIVTICKET = document.getElementsByClassName("boxTicket");
        for (const e of DIVTICKET) {
            e.draggable = false;
        }
        commentModal.style.display = "block";
        titleTicketInTicket.style.backgroundColor = board.color;
        cancelComment.style.backgroundColor = board.color;
    });

    cancelComment.addEventListener("click", function(e) {
        e.stopPropagation();
        commentModal.style.display = "none";
        location.reload();
    });

    let hTitleTicket = tick.querySelector(".titleTicket");
    let id = tick.querySelector(".id");
    id = id.value;

    hTitleTicket.addEventListener("click", function(e) {
        let input = document.createElement("input");
        hTitleTicket.insertAdjacentElement("beforebegin", input);
        input.id = "updateTitleTicket";
        let task_name = tick.querySelector(".ticket").innerText;
        input.value = task_name;
        input.select();

        console.log(task_name);
        hTitleTicket.classList.add("displayNone");
        input.addEventListener("keydown", async function(e) {
            if (e.key === "Enter") {
                let url = hTitleTicket.getAttribute("data_url");
                let token = document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content");

                let body = {
                    id: id,
                    task: input.value
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
                    location.reload();
                } catch (error) {
                    console.log(error);
                }
            }
        });
    });
}
