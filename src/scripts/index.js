
import {
  inputName,
  inputStatus,
  openRedactorBtn,
  openAdderBtn,
  memes,
  config

} from "./constans.js";
import PopupWithImage from "./popupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./card.js";
import Section from "./section.js";
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

const defaultCards = new Section({
  items: memes, renderer:
    (element) => {
      const cardElement = createCard(element)
      defaultCards.addItem(cardElement)

    }
}, ".cards")

function createCard(element) {

  const card = new Card(element, '#card-template', handleCardClick);
  const cardEl = card.createCard();
  return cardEl
}
defaultCards.renderItems();

function handleCardClick(element) {
  const popupImg = new PopupWithImage("#popupImg", element);
  popupImg.openPopupWithImage(element);

};

const userInfo = new UserInfo({ nameProfile: ".profile__name", statusProfile: ".profile__status" });
const redactorForm = new PopupWithForm("#popupRedactor", submitRedactorForm);
redactorForm.setEventListeners();
const userData = userInfo.getUserInfo();

function submitRedactorForm(inputValues) {
  console.log('subFunc')
  userInfo.setUserInfo(inputValues);
  redactorForm.closePopup();
}
openRedactorBtn.addEventListener("click", () => {
  redactorForm.openPopup();
  inputName.value = userData.name;
  inputStatus.value = userData.status;
  formValidator['redactorForm'].resetValidation();
});

const addForm = new PopupWithForm("#popupAdder", saveNewCard);
addForm.setEventListeners();
function saveNewCard(value) {
  console.log(value)
  const newCardValue = [{
    name: value.inputPlace,
    link: value.inputPhoto


  }]
  console.log(newCardValue)
  const newCard = new Section({
    items: newCardValue, renderer:
      (element) => {

        const cardElement = createCard(element)
        newCard.addItem(cardElement)

      }
  }, ".cards")

  newCard.renderItems();
  addForm.closePopup();
}
openAdderBtn.addEventListener("click", () => {
  addForm.openPopup();
  formValidator['adderForm'].resetValidation();

});





