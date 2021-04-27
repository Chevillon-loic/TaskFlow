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

        btn.innerText = "plus";
        close.innerText = "X";

        ticket.insertAdjacentElement("beforeend", input);
        ticket.insertAdjacentElement("beforeend", btn);
        ticket.insertAdjacentElement("beforeend", close);
        input.select();
        input.placeholder = "Ajouter un ticket";

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

    const DIVTICKET = document.getElementsByClassName("boxTicket");
    // console.log(DIVTICKET[0]);
    for (const ticket of DIVTICKET) {
        let btnSupp = ticket.querySelector("#removeTicket");
        console.log(btnSupp);
        let divModalTicket = ticket.querySelector("#modalContainerTicket");

        // let ticketBox = ticket.querySelector(".boxTicket");

        let cancelRemoveTicket = ticket.querySelector("#cancelRemoveTicket");

        btnSupp.addEventListener("click", function(e) {
            divModalTicket.style.display = "block";
        });

        cancelRemoveTicket.addEventListener("click", function(e) {
            divModalTicket.style.display = "none";
        });

        let commentModal = ticket.querySelector("#modalContainerComment");
        let cancelComment = ticket.querySelector("#cancelComment");
        ticket.addEventListener("click", function(e) {
            commentModal.style.display = "block";
        });
        console.log(cancelComment);
        cancelComment.addEventListener("click", function(e) {
            commentModal.style.display = "none";
            console.log(commentModal);
        });

        // console.log(ticketBox);
        // console.log(boxTicket);

        // boxTicket.addEventListener("click", function(e) {
        //     commentModal.style.display = "block";
        // });
    }
}
