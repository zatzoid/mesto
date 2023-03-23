let nameText = document.querySelector(".profile__name");
let statusText = document.querySelector(".profile__status");
let submitBtn = document.querySelector(".popup__save");
let popup = document.querySelector(".popup");
let redactor = document.querySelector(".profile__redactor");
let closeBtn = document.querySelector(".popup__close");
let form = document.querySelector("#form");
let nameForm = document.querySelector("#form__name")
let statusFrom = document.querySelector("#form__status")

/* open */
function openRedactor() {

    popup.classList.add("popup_opened");
    nameForm.value = nameText.textContent;
    statusFrom.value = statusText.textContent


};
redactor.addEventListener("click", openRedactor);
/* close */
function closeRedactor() {

    popup.classList.remove("popup_opened")

};

closeBtn.addEventListener("click", closeRedactor);

/* save */

function handleFormSubmit(evt) {
    evt.preventDefault();

    nameText.textContent = nameForm.value
    statusText.textContent = statusFrom.value

    popup.classList.remove("popup_opened");

};

form.addEventListener("submit", handleFormSubmit);

