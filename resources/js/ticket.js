const BTNADDTICKET = document.getElementById('btnAddTicket');

BTNADDTICKET.addEventListener('click', async function(e) {

    let url = document.location.origin + "/ticket/store/" + board.id;
    let token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    let body = {
        column_id: 1,
        user_id: user.id,
        task: "chose a faire"
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
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

