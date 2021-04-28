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
const INVITECONTAINER = document.getElementById("inviteContainer"); //CONTAINER
const INVITE = document.getElementById("invite"); //BOUTON

INVITE.addEventListener("click", function(e) {
    INVITE.disabled = true;
    INVITE.id = "btnDisabled";
    let divForInvite = document.createElement("div");
    divForInvite.id = "divForInvite";
    divForInvite.innerHTML = `
        <span>
        <p>Inviter sur le tableau</p>
        <button id="closeInvite">X</button>
        </span>
        <input type="text" id="inputInvite" placeholder="nom, prenom ou email...">
        <div id="usersToInvite">
        </div>
        <button id="btnToInvite">Inviter</button>
    `;

    //Variable recup du innerHTML
    let closeInvite = divForInvite.querySelector("#closeInvite");
    let inputInvite = divForInvite.querySelector("#inputInvite");
    let usersToInvite = divForInvite.querySelector("#usersToInvite");
    let btnToInvite = divForInvite.querySelector("#btnToInvite");

    //styles invite
    btnToInvite.style.backgroundColor = board.color;
    inputInvite.style.borderColor = board.color;

    //ajout au DOM
    INVITECONTAINER.insertAdjacentElement("afterend", divForInvite);
    inputInvite.select();

    //CLOSE BTN
    closeInvite.addEventListener("click", function(e) {
        divForInvite.remove();
        INVITE.disabled = false;
        INVITE.id = "invite";

        //! A VOIR et changé---------------------------------------
        let pToRemove = usersToInvite.getElementsByClassName("p");
        for (const p of pToRemove) {
            p.remove();
        }
        //!--------------------------------------------------------
    });

    //Input listener KEYUP
    inputInvite.addEventListener("keyup", async function(e) {
        let q = inputInvite.value;
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
        let divToRemove = usersToInvite.getElementsByClassName("p");
        for (const p of divToRemove) {
            p.remove();
        }
        let userstoShow;
        if (q.length > 3) {
            //Promesse (requete GET)
            try {
                const response = await fetch(url, options);
                const users = await response.json();
                userstoShow = users;
            } catch (error) {
                console.log(error);
            }
            console.log(userstoShow);
            setTimeout(() => {
                userstoShow.forEach(user => {
                    let div = document.createElement("div");
                    div.innerHTML = `
                    <p class="p"> ${user.first_name} ${user.last_name}</p>`;
                    usersToInvite.appendChild(div);
                });
            }, 1000);
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

<<<<<<< HEAD

=======
>>>>>>> 0a53c3d13a8d24febec64a1183a444257a11d03d
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
<<<<<<< HEAD

=======
>>>>>>> 0a53c3d13a8d24febec64a1183a444257a11d03d
