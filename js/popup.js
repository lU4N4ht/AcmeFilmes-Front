'use strict'
const filmeButton = document.getElementById('card-filme')
const myPopup = document.getElementById('popup')
const closePopup = document.getElementById('closePopup')

filmeButton.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});