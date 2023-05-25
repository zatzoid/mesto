
/* redactor */
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const inputName = popupRedactor.querySelector("#nameInput");
const inputStatus = popupRedactor.querySelector("#statusInput");
const openRedactorBtn = document.querySelector(".profile__redactor");

const formRedactor = popupRedactor.querySelector("#formRedactor");
/* img add popup */
const cardsContainer = document.querySelector(".cards");

const openAdderBtn = document.querySelector(".profile__add");
const adderForm = popupAdder.querySelector("#adderForm");
const inputPlace = adderForm.querySelector("#inputPlace");
const inputPhoto = adderForm.querySelector("#inputPhoto");
/* img fullscreen popup */



/* validator */

import Popup from "./popup.js";
import PopupWithImage from "./popupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__element',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup_input-error',
  errorClass: 'popup__element-error'
};

import { FormValidator } from "./FormValidator.js";
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

/* дефолтные картинки */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
/*картинки вместо дефолтных */
const memes = [
  {
    name: 'Архыз',
    link: 'https://sun9-25.userapi.com/impg/ACPbtCWjNlkNxETg7ZnG6CSiBLLsC1eWWJYEqw/DJidYBntE7k.jpg?size=1224x1224&quality=96&sign=a2d51e32a4c046bfff7c19893904d34a&type=album'
  },
  {
    name: 'Челябинская область',
    link: 'https://sun9-35.userapi.com/impg/Dnx-K_dVQdXokSySQdRfHcisv1RLJRF2OaRscw/bLVhyZAsz4U.jpg?size=1080x1254&quality=96&sign=98ef054c8f609e07a5079dbbd4fd95ae&type=album'
  },
  {
    name: 'Иваново',
    link: 'https://sun9-71.userapi.com/impg/OKoHzozs_j9GaWWFVslSR0_7R10a_Qbpf7NXjQ/kNfr82uI5Co.jpg?size=1200x1178&quality=96&sign=942743b0a63fd6c23d0f95c4cbcb2968&type=album'
  },
  {
    name: 'Камчатка',
    link: 'https://sun9-19.userapi.com/impg/dBcxROhyVqj0K1JD0MZv6azh0oluOye0LGs4uA/4iX_VomU67Y.jpg?size=1215x2160&quality=95&sign=c4eea7df86a973993cefafa83aaf70d0&type=album'
  },
  {
    name: 'Холмогорский район',
    link: 'https://sun9-47.userapi.com/impg/ZWwSIn_Wkpp8wgJdWSjdTOgfrOQY4R--yW2y6Q/BDNmXNY0GzI.jpg?size=1028x862&quality=96&sign=a27832dde2f0ebf54f5bf8be62c674f5&type=album'
  },
  {
    name: 'Байкал',
    link: 'https://sun9-65.userapi.com/impg/y8tRn1Aj_6cE7_60GthiM2VcQjiHyPMdyJH09A/GIhFG3uQeWk.jpg?size=1920x1080&quality=96&sign=9d84f70a970a5404b7b047fa4d5d6523&type=album'
  }
];
import { Card } from "./card.js";
import Section from "./section.js";

function createCard(element) {
  const cardElement = new Card(element, '#card-template', handleCardClick);
  return cardElement.createCard();
}

class AutoAdd extends Card {
  constructor(element, tempSelector) {
    super(element, tempSelector);
    this._element = element;

  }

  addCards() {
    this._element.forEach(element => {

      cardsContainer.append(createCard(element));
    });
  }


}

const autoAdd = new AutoAdd(memes, "#card-template");
autoAdd.addCards();

class PhotoSaver extends Card {
  constructor(tempSelector) {
    super();
    this._tempSelector = tempSelector;
    this._popup = new Popup("#popupAdder")
  }

  _saveAddedPhoto(event) {
    event.preventDefault();
    const newCardValue = {
      link: inputPhoto.value,
      name: inputPlace.value
    };
    cardsContainer.prepend(createCard(newCardValue));
    this._popup.closePopup();
  }
  setEventListeners() {
    adderForm.addEventListener('submit', this._saveAddedPhoto.bind(this));
  }
}
/* ----- */
const photoSaver = new PhotoSaver('#card-template');
photoSaver.setEventListeners();

const defaultCard = new Section({items: memes, renderer:
() => { 
const card = new Card()

}, container: ".cards"})

export function handleCardClick(element) {

  const popupImg = new PopupWithImage("#popupImg", element);
  console.log(popupImg)
  popupImg.openPopupWithImage(element);

};

function openPopupWithForm(popupSelector, formValIndex, submitCallback) {
  const popup = new PopupWithForm(popupSelector, (inputValues)=> {
   
  submitCallback(inputValues)
 
  });
  popup.openPopup();
  
  formValidator[formValIndex].resetValidation();
  
}

openRedactorBtn.addEventListener("click", () => {
  const userInfo = new UserInfo({ nameProfile: ".profile__name", statusProfile: ".profile__status" });

  openPopupWithForm("#popupRedactor", 'redactorForm', (inputValues) => {
    userInfo.setUserInfo(inputValues);
    
  });

  const userData = userInfo.getUserInfo();

  inputName.value = userData.name;
  inputStatus.value = userData.status;

});

openAdderBtn.addEventListener("click", () => {
  openPopupWithForm("#popupAdder", 'adderForm')

});





