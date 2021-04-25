const BTNADDCOMMENT = document.getElementById('btnAddComment');

BTNADDCOMMENT.addEventListener('click', async function(e) {

    let url = document.location.origin + "/comment/store/" + board.id;
    let token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    let body = {
        ticket_id: 1,
        user_id: user.id,
        description: "bientot fini"
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

