let buttonProfileModification = document.getElementById(
    "buttonProfileModification"
);
let grayBackground = document.getElementById("grayBackground");
let buttonClose = document.getElementById("closeProfileModification");
let profile = document.getElementById("profile");

buttonProfileModification.addEventListener("click", function(e) {
    grayBackground.style.display = "flex";
    profile.style.display = "none";
});

buttonClose.addEventListener("click", function(e) {
    grayBackground.style.display = "none";
    profile.style.display = "flex";
});
