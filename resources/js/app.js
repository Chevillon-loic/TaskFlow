const URL = document.location.href;
if (URL.includes("home")) {
    // Modal for home Page to Add Board

    let modal = document.getElementById("displayModal");
    let btn = document.getElementById("btnModal");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    };
    span.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    //Gestion couleur dans Modal ----------------------------

    const COLORTAB = document.getElementsByClassName("color");
    const MODALLEFT = document.getElementById("modalLeft");
    const BTN = document.getElementById("buttonBoard");

    for (const elem of COLORTAB) {
        elem.addEventListener("click", function(e) {
            for (const e of COLORTAB) {
                e.classList.remove("valid");
            }
            elem.classList.add("valid");
            let color = elem.control.defaultValue;
            MODALLEFT.style.backgroundColor = color;
            BTN.addEventListener("mouseover", function(e) {
                BTN.style.backgroundColor = color;
            });
            BTN.addEventListener("mouseout", function(e) {
                BTN.style.backgroundColor = "#fff";
            });
        });
    }
}
//-------------------------------------------------------

//Navbar page Board
const NAVBAR = document.getElementById("navbar");

if (URL.includes("board")) {
    NAVBAR.style.background = board.color;
}
