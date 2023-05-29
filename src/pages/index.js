import './index.css';

import {
    inputName,
    inputStatus,
    openRedactorBtn,
    openAdderBtn,
    memes,
    config

} from "../utils/constans.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
const formValidator = {};
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formEl) => {
        const validator = new FormValidator(config, formEl)
        const formName = formEl.getAttribute('name')
        formValidator[formName] = validator;
        validator.enableValidation();
    });
};

enableValidation(config);
//
const section = new Section({items: memes, renderer:  renderer  }, ".cards")
function renderer(el){
    const cardElement = createCard(el)
    section.addItem(cardElement)
}
//
section.renderItems(memes);

function createCard(element) {

    const card = new Card(element, '#card-template', handleCardClick);
    const cardEl = card.createCard();
    return cardEl
}

//
const popupImg = new PopupWithImage("#popupImg");
popupImg.setEventListeners();
function handleCardClick(element) {

    popupImg.openPopup(element);

};
//
const userInfo = new UserInfo({ nameProfile: ".profile__name", statusProfile: ".profile__status" });
const redactorForm = new PopupWithForm("#popupRedactor", submitRedactorForm);
redactorForm.setEventListeners();


function submitRedactorForm(inputValues) {
    console.log('subFunc')
    userInfo.setUserInfo(inputValues);
    redactorForm.closePopup();
}
openRedactorBtn.addEventListener("click", () => {
    redactorForm.openPopup();
    const userData = userInfo.getUserInfo();
    inputName.value = userData.name;
    inputStatus.value = userData.status;
    formValidator['redactorForm'].resetValidation();
});
//
const addForm = new PopupWithForm("#popupAdder", saveNewCard);
addForm.setEventListeners();
function saveNewCard(value) {
    console.log(value)
    const newCardValue = {
        name: value.inputPlace,
        link: value.inputPhoto


    }
    section.addItem(createCard(newCardValue));

    
    addForm.closePopup();
}
openAdderBtn.addEventListener("click", () => {
    addForm.openPopup();
    formValidator['adderForm'].resetValidation();

});





