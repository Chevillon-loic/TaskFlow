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
        BTNADDTICKET.style.display = "none";

        btn.innerText = "plus";
        close.innerText = "X";

        console.log(d);

        divAddTicket.insertAdjacentElement("beforeend", input);
        divAddTicket.insertAdjacentElement("beforeend", btn);
        divAddTicket.insertAdjacentElement("beforeend", close);
        input.select();
        input.placeholder = "Ajouter un ticket";

        close.addEventListener("click", function(e) {
            input.remove();
            btn.remove();
            close.remove();
            BTNADDTICKET.style.display = "initial";
        })
    })
}



// btnAdd[0].addEventListener("click", async function(e) {
//     let url = document.location.origin + "/ticket/store/" + board.id;
//     let token = document
//         .querySelector('meta[name="csrf-token"]')
//         .getAttribute("content");
//     console.log(id);
//     let body = {
//         column_id: id,
//         user_id: user.id,
//         task: "chose a faire"
//     };

//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "X-CSRF-TOKEN": token
//         },
//         body: JSON.stringify(body)
//     };

//     try {
//         const response = await fetch(url, options);
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// });
