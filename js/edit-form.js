let popup = document.querySelector(".popup");
let redactor = document.querySelector(".profile__redactor");
let close = document.querySelector(".form__close");
/* open */
function openRedactor() {
    console.log('button-ok');
    popup.classList.add('popup_opened');
    
};
redactor.addEventListener('click', openRedactor);
/* close */
function closeRedactor() {
    console.log('close ok')
popup.classList.remove('popup_opened')

};

close.addEventListener('click', closeRedactor);
/*  */

let name = document.querySelector(".form__name");
let status = document.querySelector(".form__status");

