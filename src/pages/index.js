import './index.css';

import {
  inputName,
  inputStatus,
  openRedactorBtn,
  openAdderBtn,
  avatarBtn,
  config

} from "../utils/constans.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import PopupConfirm from '../components/PopupConfirm';
import API from '../components/API.js';
import { error } from 'jquery';



//дефолтные пикчи
const api = new API({
  link: 'https://mesto.nomoreparties.co/v1/cohort-68',

  headers: {
    authorization: '0d4f9f4d-4868-45fa-840e-d7c93dc88c5e',
    'Content-Type': 'application/json'
  }

})
let userId
Promise.all([api.getUserId(), api.defaultImg()])
  .then(([data, cards]) => {
    console.log(data)
    userId = data._id;
    userInfo.setUserInfo(data);
    userInfo.setUserAvatar(data);
    console.log(cards)
    section.renderItems(cards);

  })
  .catch((err) => {
    console.log(`from promise--- ${err}`)
  })
////////////////////////////////
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
const section = new Section(renderer, ".cards")


function renderer(el) {
  const cardElement = createCard(el)
  section.addItem(cardElement)
}
//


function createCard(element) {

  const card = new Card(element, '#card-template', handleCardClick, confirm, userId,
    async () => {//putlike
      try {
        const res = await api.putLike(element._id);

        card.likeCount(res)
      }
      catch (err) { console.log(err) }
    }, async () => {//deslike
      try {
        const res = await api.desLike(element._id);

        card.likeCount(res)
      }
      catch (err) { console.log(err) }
    });
  const cardEl = card.createCard();

  return cardEl
}

////////
const popupImg = new PopupWithImage("#popupImg");
popupImg.setEventListeners();
function handleCardClick(element) {

  popupImg.openPopup(element);
};

//
const popupConfirm = new PopupConfirm("#popupConfirm", deleteCard)
async function deleteCard(cardObj, cardEl) {
  try {
    await api.deleteCard(cardObj._id)
    cardEl.remove()
  } catch (err) {
    console.log(err)
  }
}
function confirm(cardObj, cardEl) {
  popupConfirm.openPopup(cardObj, cardEl);

}
popupConfirm.setEventListeners();
//ava
const avatarForm = new PopupWithForm('#popupAvatar', submitAvatarForm)
avatarForm.setEventListeners();

async function submitAvatarForm(inputValues) {
  avatarForm.loading(true, 'Сохранение...')
  try {
    console.log(inputValues)
    const res = await api.changeAvatar(inputValues)
    userInfo.setUserAvatar(res)
    avatarForm.closePopup()
  } catch (error) {
    console.error(error);
  }
}
avatarBtn.addEventListener('click', () => {
  formValidator['avatarForm'].resetValidation();
  avatarForm.openPopup();
})

//redactor
const userInfo = new UserInfo({ nameProfile: ".profile__name", statusProfile: ".profile__status", avatar: '.profile__pic' });
const redactorForm = new PopupWithForm("#popupRedactor", submitRedactorForm);
redactorForm.setEventListeners();


async function submitRedactorForm(inputValues) {
  try {

    const res = await api.changeUserInfo(inputValues);
    userInfo.setUserInfo(res);
    redactorForm.closePopup();
  } catch (err) {
    console.log(err);
  }
}
openRedactorBtn.addEventListener("click", () => {
  redactorForm.openPopup();
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputStatus.value = userData.about;
  formValidator['redactorForm'].resetValidation();
});
//addphoto
const addForm = new PopupWithForm("#popupAdder", saveNewCard);
addForm.setEventListeners();
async function saveNewCard(value) {
  addForm.loading(true, 'Создание...')

  const newCardValue = {
    name: value.inputPlace,
    link: value.inputPhoto,
    likes: [],
    owner: { _id: userId },


  }
  try {
    const res = await api.createNewCard(newCardValue);
    section.addItem(createCard(res));
    addForm.loading(false)
    addForm.closePopup();
  }
  catch (err) {
    console.log(err)
  }

}
openAdderBtn.addEventListener("click", () => {
  addForm.openPopup();
  formValidator['adderForm'].resetValidation();

});





