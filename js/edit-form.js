let nameText = document.querySelector(".profile__name");
let statusText = document.querySelector(".profile__status");
let submitBtn = document.querySelector(".popup__save");
let popupRed = document.querySelector("#popupRed");
let redactor = document.querySelector(".profile__redactor");
let closeBtn = document.querySelector("#closeRed");
let form = document.querySelector("#form");
let nameForm = document.querySelector("#form__name");
let statusFrom = document.querySelector("#form__status");
const cardsContainer = document.querySelector(".cards");
const popupAdd = document.querySelector("#popupAdd");
const addButon = document.querySelector(".profile__add");
const closeBtnAdder = document.querySelector("#closeAdd")
const cardTemplate = document.querySelector("#card-template").content;
const cardEl = cardTemplate.querySelector(".card");
const formAdd = document.querySelector("#formAdd")
const saveAdd = document.querySelector("#saveAdd");
const cardImg = cardEl.querySelector(".card__img");
const cardText = cardEl.querySelector(".card__text");
const addName = document.querySelector("#addName");
const addPhoto = document.querySelector("#addPhoto");
const popupImg = document.querySelector("#popupImg")
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
/* CARD ADDER */

function cardAdder(element) {
  const cardEl = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImg = cardEl.querySelector(".card__img");
  const cardText = cardEl.querySelector(".card__text");
  /* value */
  cardImg.src = element.link;
  cardImg.alt = element.name
  cardText.textContent = element.name;
  /* like */
  const likeButton = cardEl.querySelector(".card__like");
  likeButton.addEventListener("click", (evnt) => {
    evnt.target.classList.toggle('card__like_active')
  });
  /* del */
  const cardDel = cardEl.querySelector(".card__cleaner")
  cardDel.addEventListener("click", () => {
    cardEl.remove();

  });
  /* close */
  const closeImg = document.querySelector("#closeImg")
  closeImg.addEventListener("click", () => {
    popupImg.classList.remove("popup_opened");
  });
  /* popup img */
  const popupImgEl = document.querySelector(".popup__img");
  const popupImgText = document.querySelector(".popup__text");
  cardImg.addEventListener("click", () => {
    popupImg.classList.add("popup_opened");
    popupImgEl.src = element.link;
    popupImgEl.alt = element.name;
    popupImgText.textContent = element.name
  });



  return cardEl;
};

/* auto adder  */
initialCards.forEach((element) => {
  const autoAdd = cardAdder(element);
  cardsContainer.append(autoAdd);

});
/* save form add */
function saveAddedPhoto(element) {
  element.preventDefault();
  element.link = addPhoto.value;
  element.name = addName.value;
  const newCard = cardAdder(element);
  cardsContainer.prepend(newCard);
  closeAdder();
  formAdd.reset()
};

formAdd.addEventListener("submit", saveAddedPhoto);



/* open */
function openRedactor() {
  popupRed.classList.add("popup_opened");
  nameForm.value = nameText.textContent;
  statusFrom.value = statusText.textContent
};
redactor.addEventListener("click", openRedactor);
/* close */
function closeRedactor() {

  popupRed.classList.remove("popup_opened")

};

closeBtn.addEventListener("click", closeRedactor);
/* add */

function openAdder() {
  popupAdd.classList.add("popup_opened");
};
addButon.addEventListener("click", openAdder);


function closeAdder() {
  popupAdd.classList.remove("popup_opened");
  console.log("close")
};

closeBtnAdder.addEventListener("click", closeAdder);
/* save */

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameText.textContent = nameForm.value;
  statusText.textContent = statusFrom.value;
  closeRedactor()
};

form.addEventListener("submit", handleFormSubmit);

