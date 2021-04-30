const BTNADDLIST = document.getElementById("btnAddList");
const divAddList = document.querySelector(".addColumn");

//Ajoutez une liste
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
    inputInvite.style.borderColor = board.color;

    //ajout au DOM
    INVITECONTAINER.insertAdjacentElement("afterend", divForInvite);
    inputInvite.select();
    btnToInvite.disabled = true;
    //CLOSE BTN
    closeInvite.addEventListener("click", function(e) {
        divForInvite.remove();
        INVITE.disabled = false;
        INVITE.id = "invite";

        let pToRemove = usersToInvite.getElementsByClassName("p");
        for (const p of pToRemove) {
            p.remove();
        }
    });

    //LISTENER BTN Invitation et FETCH
    btnToInvite.addEventListener("click", async function(e) {
        e.preventDefault();
        e.stopPropagation();
        let guestID;
        usersToInvite.childNodes.forEach(function(div) {
            let checkbox = div.getElementsByTagName("input");
            if (checkbox.checked) {
                guestID = div.getAttribute("guest_id");
            }
        });
        //console.log(guestID + " guestID : boardID " + board.id);
        //console.log(e.target);
        //FETCH
        let url =
            document.location.origin +
            "/board/guestinvite/" +
            board.id +
            "/" +
            guestID;
        let token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
        //Corps de la requete
        const options = {
            method: "POST",
            headers: {
                "X-CSRF-TOKEN": token,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        };
        console.log(options);
        try {
            //console.log(url);
            const response = await fetch(url, options);
            console.log(response);
            location.reload();
        } catch (error) {
            console.log(error);
        }
    });

    //Input listener KEYUP
    inputInvite.addEventListener("keyup", async function(e) {
        //réinitialisation du bouton inviter
        btnToInvite.disabled = true;
        btnToInvite.style.backgroundColor = "rgb(241, 241, 241)";

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
        usersToInvite.innerHTML = "";
        //Promesse (requete GET)
        let userstoShow;
        if (q.length > 3) {
            try {
                const response = await fetch(url, options);
                const users = await response.json();
                userstoShow = await users;
            } catch (error) {
                console.log(error);
            }
            usersToInvite.innerHTML = "";
            //Boucle pour créer une div et l'afficher
            userstoShow.forEach(elem => {
                //console.log(elem);
                if (elem.id != user.id) {
                    let div = document.createElement("div");
                    div.id = "userDiv-" + elem.id;
                    div.setAttribute("guest_id", elem.id);
                    div.innerHTML = `
                    <img src="${elem.picture}" alt="picture">
                    <label for="user"> ${elem.first_name} ${elem.last_name}</label>
                    <input type="checkbox" name="user" id="user-${elem.id}" value="${elem.id}">
                    `;
                    usersToInvite.appendChild(div);
                    //Listener sur la div User
                    div.addEventListener("click", function(e) {
                        e.stopPropagation;
                        let checkbox = this.getElementsByTagName("input");

                        usersToInvite.childNodes.forEach(function(div) {
                            let checkbox = div.getElementsByTagName("input");
                            div.style.backgroundColor = "";
                            div.style.color = "";
                            checkbox.checked = false;
                        });
                        btnToInvite.disabled = true;
                        btnToInvite.style.backgroundColor =
                            "rgb(241, 241, 241)";

                        this.style.backgroundColor = board.color;
                        this.style.color = "white";
                        btnToInvite.disabled = false;
                        btnToInvite.style.backgroundColor = board.color;
                        checkbox.checked = true;
                    });
                }
            });
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

    let editColumnIcon = elem.querySelector(".editColumnIcon");
    elem.addEventListener("mouseover", e => {
        editColumnIcon.classList.toggle("displayNone");
    });
    elem.addEventListener("mouseout", e => {
        editColumnIcon.classList.toggle("displayNone");
    });

    plabelColumn.addEventListener("click", function(e) {
        let dataLabel = this.getAttribute("data_label");
        let i = document.createElement("input");
        plabelColumn.insertAdjacentElement("beforebegin", i);
        i.id = "updateLabelColumInput";
        i.value = dataLabel;
        i.select();
        plabelColumn.style.display = "none";

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
const EDITTITLEICON = document.getElementById("editTitleIcon");

TITLETAB.addEventListener("mouseover", e => {
    EDITTITLEICON.classList.toggle("displayNone");
});
TITLETAB.addEventListener("mouseout", e => {
    EDITTITLEICON.classList.toggle("displayNone");
});

TITLETAB.addEventListener("click", function(e) {
    let i = document.createElement("input");
    TITLETAB.insertAdjacentElement("beforebegin", i);
    i.value = board.label;
    i.id = "inputupdateTitleBoard";
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
