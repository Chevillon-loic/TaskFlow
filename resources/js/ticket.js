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
const DIVTICKET = document.getElementsByClassName("boxTicket");

for (const ticket of DIVTICKET) {
    const titleTicket = ticket.querySelector(".ticket");
    let btnSupp = ticket.querySelector("#removeTicket");

    let divModalTicket = ticket.querySelector("#modalContainerTicket");

    let cancelRemoveTicket = ticket.querySelector("#cancelRemoveTicket");

    btnSupp.addEventListener("click", function(e) {
        divModalTicket.style.display = "block";
        commentModal.style.display = "none";
    });

    cancelRemoveTicket.addEventListener("click", function(e) {
        divModalTicket.style.display = "none";
    });

    let commentModal = ticket.querySelector("#modalContainerComment");
    let cancelComment = ticket.querySelector(".cancelComment");
    let addComment = ticket.querySelector(".addComment");
    commentModal.style.display = "none";

    let b = document.createElement("button");
    b.id = "btnAddComment";
    b.style.backgroundColor = board.color;
    addComment.addEventListener("click", function(e) {
        b.innerText = "Valider";
        addComment.insertAdjacentElement("afterend", b);
        b.style.display = "block";
    });

    b.addEventListener("click", async function(e) {
        b.style.display = "none";

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
            } catch (error) {
                console.log(error);
            }
        } else {
            addComment.value = "";
        }
    });

    titleTicket.addEventListener("click", function(e) {
        commentModal.style.display = "block";
    });

    cancelComment.addEventListener("click", function(e) {
        e.stopPropagation();
        commentModal.style.display = "none";
    });

    let hTitleTicket = ticket.querySelector(".titleTicket");
    let id = ticket.querySelector(".id");
    id = id.value;

    hTitleTicket.addEventListener("click", function(e) {
        let input = document.createElement("input");
        hTitleTicket.insertAdjacentElement("beforebegin", input);
        input.id = "updateTitleTicket";
        input.select();
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
