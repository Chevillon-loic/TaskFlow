const ADDTICKETDIV = document.getElementsByClassName("addTicket");

for (const ticket of ADDTICKETDIV) {
    let t = ticket.getElementsByTagName("input");
    let id = t[0].value;
    let btnAdd = ticket.getElementsByTagName("button");
    btnAdd[0].addEventListener("click", async function(e) {
        let url = document.location.origin + "/ticket/store/" + board.id;
        let token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
        console.log(id);
        let body = {
            column_id: id,
            user_id: user.id,
            task: "chose a faire"
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": token
            },
            body: JSON.stringify(body)
        };

        try {
            const response = await fetch(url, options);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    });
}
