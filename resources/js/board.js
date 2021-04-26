const BTNADDLIST = document.getElementById("btnAddList");
const divAddList = document.querySelector(".addColumn");

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
    inputInvite.select();
    //CLOSE BTN
    closeInvite.addEventListener("click", function(e) {
        inputInvite.remove();
        closeInvite.remove();
        INVITE.style.display = "initial";
        let pToRemove = INVITECONTAINER.getElementsByClassName("p");
        console.log(pToRemove);
        for (const p of pToRemove) {
            p.remove();
        }
    });

    //Input listener KEYUP
    inputInvite.addEventListener("keyup", async function(e) {
        let q = inputInvite.value;
        console.log(q);
        let url = document.location.origin + "/board/search/" + q;
        let token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
        //Corps de la requete
        const options = {
            method: "GET",
            headers: {
                "X-CSRF-TOKEN": token
            }
        };
        if (q.length > 3) {
            //Promesse (requete GET)
            try {
                let pToRemove = INVITECONTAINER.getElementsByClassName("p");
                for (const p of pToRemove) {
                    p.remove();
                }
                const response = await fetch(url, options);
                const users = await response.json();
                console.log(users);
                for (const user of users) {
                    let p = document.createElement("p");
                    p.classList.add("p");
                    p.innerText = user.first_name + " " + user.last_name;
                    INVITECONTAINER.insertAdjacentElement("beforeend", p);
                }
            } catch (error) {
                console.log(error);
            }
        }
    });
});

//Bouton Supprimer Column
const TITLECONTAINER = document.getElementsByClassName("columTitleDiv");

for (const elem of TITLECONTAINER) {
    let remBtn = elem.querySelector("#removeColumn");
    let modalContainer = elem.querySelector("#modalContainer");

    let cxlremBtn = elem.querySelector("#cancelRemoveColumn");

    remBtn.addEventListener("click", function(e) {
        modalContainer.classList.toggle("displayNone");
    });

    cxlremBtn.addEventListener("click", function(e) {
        modalContainer.classList.toggle("displayNone");
    });
}
//-------------------------------------------------------
