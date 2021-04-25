const BTNADDLIST = document.getElementById("btnAddList");
console.log(board);
BTNADDLIST.addEventListener("click", async function(e) {
    //recup de l'url
    let url = document.location.origin + "/board/store/" + board.id;
    let token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    //recup des données a inserer en BDD
    let body = {
        board_id: board.id,
        label: "ceci est une liste"
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

    //Promesse (requete POST)
    try {
        const response = await fetch(url, options);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});
