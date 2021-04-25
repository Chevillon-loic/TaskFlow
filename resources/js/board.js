const BTNADDLIST = document.getElementById("btnAddList");
const divAddList = document.querySelector(".addColumn");
console.log(divAddList);
BTNADDLIST.addEventListener("click", function(e) {
    let input = document.createElement("input");
    let btn = document.createElement("button");
    let close = document.createElement("button");

    btn.innerText = "Ajoutez une liste";
    close.innerText = "X";

    divAddList.insertAdjacentElement("beforebegin", input);
    divAddList.insertAdjacentElement("beforeend", btn);
    divAddList.insertAdjacentElement("beforeend", close);
    BTNADDLIST.style.display = "none";
    input.select();
    input.placeholder = "Saisissez le titre de la liste...";

    //Listener bouton Close
    close.addEventListener("click", function(e) {
        input.remove();
        btn.remove();
        close.remove();
        BTNADDLIST.style.display = "initial";
    });

    //Listener bouton Ajoutez une liste

    btn.addEventListener("click", async function(e) {
        //recup de l'url
        let url = document.location.origin + "/board/store/" + board.id;
        let token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        //Recup label (valeur de l'input)
        let label = input.value;

        //recup des données a inserer en BDD
        let body = {
            board_id: board.id,
            label: label
        };
        //Corps de la requete et body
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": token
            },
            body: JSON.stringify(body)
        };
        if (label.length > 2) {
            //Promesse (requete POST)
            try {
                const response = await fetch(url, options);
                console.log(response);
                location.reload();
            } catch (error) {
                console.log(error);
            }
        } else {
            input.value = "";
        }
    });
});

//BOUTON INVITER
const INVITECONTAINER = document.getElementById("inviteContainer");
const INVITE = document.getElementById("invite");

INVITE.addEventListener("click", function(e) {
    let inputInvite = document.createElement("input");
    let closeInvite = document.createElement("button");
    inputInvite.placeholder = "Rechercher une personne...";
    closeInvite.innerText = "X";
    INVITECONTAINER.insertAdjacentElement("beforeend", inputInvite);
    INVITECONTAINER.insertAdjacentElement("beforeend", closeInvite);
    INVITE.style.display = "none";

    //CLOSE BTN
    closeInvite.addEventListener("click", function(e) {
        inputInvite.remove();
        closeInvite.remove();
        INVITE.style.display = "initial";
    });
});
