const COMMENTCONTAINER = document.getElementById('commentContainer');
const COMMENT = document.getElementById('comment')

// BOUTON AFFICHER INPUT
COMMENT.addEventListener('click', function(e) {
let inputComment = document.createElement("input");
let btnComment = document.createElement("button")
let closeComment = document.createElement("button");

// Place holder de l'input
inputComment.name ="description"
inputComment.placeholder = "Ajouter un commentaire";

//Contenu bouton Add
btnComment.innerText = "Valider"

// Contenu du bouton close
closeComment.innerText = 'x'
COMMENTCONTAINER.insertAdjacentElement('beforeend', inputComment);
COMMENTCONTAINER.insertAdjacentElement('beforeend', btnComment);
COMMENTCONTAINER.insertAdjacentElement('beforeend', closeComment);
COMMENT.style.display = "none";

// CLOSE BTN
closeComment.addEventListener("click", function(e){
    inputComment.remove();
    btnComment.remove();
    closeComment.remove();
    COMMENT.style.display = "initial";

});


// Ajouter un commentaire
btnComment.addEventListener("click" , async function(e){
    let url = document.location.origin + "/comment/store/" + 4;
    let description = inputComment.value;
    let token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    let body = {

        description: description,
        ticket_id: 4,
        user_id: user.id,
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
    if (description.length > 2) {

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
})

});
