const BTNADDLIST = document.getElementById("btnAddList");
const divAddList = document.querySelector(".addColumn");

BTNADDLIST.addEventListener("click", function(e) {
    let input = document.createElement("input");
    let btn = document.createElement("button");
    let close = document.createElement("button");

    btn.innerText = "Valider";
    btn.id = "newaddList";
    input.id = "newListInput";
    btn.style.backgroundColor = board.color;
    close.innerText = "Annuler";
    close.id = "newListCXL";

    divAddList.insertAdjacentElement("beforeend", input);
    divAddList.insertAdjacentElement("beforeend", btn);
    divAddList.insertAdjacentElement("beforeend", close);

    input.style.borderColor = board.color;
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

    async function addList(e) {
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
                console.log(response.body);
                location.reload();
            } catch (error) {
                console.log(error);
            }
        } else {
            input.value = "";
        }
    }

    btn.addEventListener("click", addList);
    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            addList();
        }
    });
});

//BOUTON INVITER
const INVITECONTAINER = document.getElementById("inviteContainer");
const INVITE = document.getElementById("invite");

INVITE.addEventListener("click", function(e) {
    let inputInvite = document.createElement("input");
    let closeInvite = document.createElement("button");
    let btnToInvite = document.createElement("button");
    inputInvite.placeholder = "Rechercher une personne...";
    closeInvite.innerText = "X";
    btnToInvite.innerText = "Inviter";
    INVITECONTAINER.insertAdjacentElement("beforeend", inputInvite);
    INVITECONTAINER.insertAdjacentElement("beforeend", closeInvite);
    INVITECONTAINER.insertAdjacentElement("beforeend", btnToInvite);
    INVITE.style.display = "none";
    inputInvite.select();
    //CLOSE BTN
    closeInvite.addEventListener("click", function(e) {
        inputInvite.remove();
        closeInvite.remove();
        btnToInvite.remove();
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
        let divToRemove = INVITECONTAINER.getElementsByClassName("p");
        for (const p of divToRemove) {
            p.remove();
        }
        if (q.length > 3) {
            //Promesse (requete GET)
            try {
                const response = await fetch(url, options);
                const users = await response.json();
                console.log(users);
                setTimeout(() => {
                    users.forEach(user => {
                        let div = document.createElement("div");
                        div.innerHTML = `
                        <p class="p"> ${user.first_name} ${user.last_name}</p>`;
                        INVITECONTAINER.insertAdjacentElement("beforeend", div);
                    });
                }, 1000);

                if (users.length >= 1) {
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
    let plabelColumn = elem.querySelector("#plabelColumn");
    //ID de la colonne
    let id = elem.querySelector(".id");
    id = id.value;
    elem.style.backgroundColor = board.color;
    remBtn.addEventListener("click", function(e) {
        modalContainer.classList.toggle("displayNone");
    });

    cxlremBtn.addEventListener("click", function(e) {
        modalContainer.classList.toggle("displayNone");
    });

    //Modif titre column (Liste)
    plabelColumn.addEventListener("click", function(e) {
        let i = document.createElement("input");
        plabelColumn.insertAdjacentElement("beforebegin", i);
        i.value = column.label;
        i.id = "updateLabelColumInput";
        i.select();
        plabelColumn.classList.add("displayNone");

        i.addEventListener("keydown", async function(e) {
            if (e.key === "Enter") {
                let url = plabelColumn.getAttribute("data_url");
                let token = document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content");
                let body = {
                    id: id,
                    label: i.value
                };
                //Corps de la requete
                const options = {
                    method: "PUT",
                    headers: {
                        "X-CSRF-TOKEN": token,
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                };
                //console.log(options);
                try {
                    //console.log(url);
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
//-------------------------------------------------------

//Bouton supprimer Tableau
const BTNDELETETAB = document.getElementById("deleteTab");
const MODALDELETETAB = document.getElementById("modalContainerTAB");
const BTNCXLDELETETAB = document.getElementById("cancelRemoveColumnTAB");

BTNDELETETAB.addEventListener("click", function(e) {
    MODALDELETETAB.classList.toggle("displayNone");
});
BTNCXLDELETETAB.addEventListener("click", function(e) {
    MODALDELETETAB.classList.toggle("displayNone");
});

//-------------------------------------------------------

//MODIFIER TITRE TABLEAU

const TITLETAB = document.getElementById("titleTab");

TITLETAB.addEventListener("click", function(e) {
    let i = document.createElement("input");
    TITLETAB.insertAdjacentElement("beforebegin", i);
    i.value = board.label;
    i.select();
    TITLETAB.classList.add("displayNone");

    i.addEventListener("keydown", async function(e) {
        if (e.key === "Enter") {
            let url = TITLETAB.getAttribute("data_url");
            console.log(url);
            let token = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");
            let body = {
                label: i.value
            };

            console.log(body);
            //Corps de la requete
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
