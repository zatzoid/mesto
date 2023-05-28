
export class Card {
  constructor(element, tempSelector, handleCardClick) {
    this._element = element;
    this._tempSelector = tempSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._tempSelector).content;
    const cardEl = cardTemplate.querySelector(".card").cloneNode(true);
    return cardEl;
  }
  _setCardValue() {
    this._cardImg.src = this._element.link;
    this._cardImg.alt = this._element.name;
    this._cardText.textContent = this._element.name;
  }



  _like() {
    this._cardLike.classList.toggle('card__like_active')
  }

  _setEventListeners(cardEl) {

    this._cardImg.addEventListener('click', () => {

      this._handleCardClick(this._element)
    });

    cardEl.querySelector(".card__like").addEventListener("click", () => {
      this._like(cardEl);
    })
    cardEl.querySelector(".card__cleaner").addEventListener("click", () => {
      cardEl.remove();

    });
  }
  createCard() {
    const cardEl = this._getTemplate();
    this._cardImg = cardEl.querySelector(".card__img");
    this._cardText = cardEl.querySelector(".card__text");
    this._cardLike = cardEl.querySelector(".card__like");
    this._popupImgEl = popupImg.querySelector(".popup__img");
    this._popupImgText = popupImg.querySelector(".popup__text");
    this._setCardValue(cardEl);
    this._setEventListeners(cardEl);

    return cardEl;
  }

}