
/* redactor */
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const popupRedactor = document.querySelector("#popupRedactor");
const openRedactorBtn = document.querySelector(".profile__redactor");
const inputName = popupRedactor.querySelector("#nameInput");
const inputStatus = popupRedactor.querySelector("#statusInput");
const closeRedactorBtn = popupRedactor.querySelector("#closeRedactor");
const formRedactor = popupRedactor.querySelector("#formRedactor");
/* img add popup */
const cardsContainer = document.querySelector(".cards");
const popupAdder = document.querySelector("#popupAdder");
const openAdderBtn = document.querySelector(".profile__add");
const adderForm = popupAdder.querySelector("#adderForm");
const closeAdderBtn = popupAdder.querySelector("#closeAdder")
const inputPlace = adderForm.querySelector("#inputPlace");
const inputPhoto = adderForm.querySelector("#inputPhoto");
const saveAddBtn = document.querySelector('#saveAddBtn')
/* template */
const cardTemplate = document.querySelector("#card-template").content;
const cardEl = cardTemplate.querySelector(".card");
const cardImg = cardEl.querySelector(".card__img");
const cardText = cardEl.querySelector(".card__text");
/* img fullscreen popup */
const popupImg = document.querySelector("#popupImg");
const closeImg = document.querySelector("#closeImg")


/* CARD ADDER */

function addNewCard(element) {
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

  /* popup img */
  const popupImgEl = popupImg.querySelector(".popup__img");
  const popupImgText = popupImg.querySelector(".popup__text");
  cardImg.addEventListener("click", () => {
    openPopup(popupImg);
    popupImgEl.src = element.link;
    popupImgEl.alt = element.name;
    popupImgText.textContent = element.name
  });
  return cardEl;
};

/* auto adder  */
initialCards.forEach((element) => {
  const autoAdd = addNewCard(element);
  cardsContainer.append(autoAdd);

});

/* save form add */
function saveAddedPhoto(element) {
  element.preventDefault();
  const newCardValue = {
    link: inputPhoto.value,
    name: inputPlace.value
  };
  const newCard = addNewCard(newCardValue);
  cardsContainer.prepend(newCard);
  adderForm.reset();
  closePopup(popupAdder);
};

adderForm.addEventListener("submit", saveAddedPhoto);
/* open popup*/

function openPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener('click', closePopupClick);
  document.addEventListener('keydown', closePopupEsc)
}


/* close popup*/
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  popup.removeEventListener('click', closePopupClick);
  document.removeEventListener('keydown', closePopupEsc);
}
/* функции закрытия */
function closePopupClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target)
  }
};
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
}
/* open redactor */
openRedactorBtn.addEventListener("click", () => {
  openPopup(popupRedactor);
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent
});

/* open adder */
openAdderBtn.addEventListener("click", () => {
  openPopup(popupAdder);
 disableBtnSubmit(popupAdder.querySelector('.popup__save')); 
  
});

/* close redactor*/
closeRedactorBtn.addEventListener("click", () => {
  closePopup(popupRedactor);
});

/* close adder */
closeAdderBtn.addEventListener("click", () => {
  closePopup(popupAdder)
  adderForm.reset()
});
/* close img*/

closeImg.addEventListener("click", () => {
  closePopup(popupImg);
});
/* save */

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
  closePopup(popupRedactor);
};

formRedactor.addEventListener("submit", handleFormSubmit);