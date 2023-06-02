
export class Card {
  constructor(element, tempSelector, handleCardClick) {
    this._element = element;
    this._tempSelector = tempSelector;
    this._handleCardClick = handleCardClick;
    this.cardEl = this._getTemplate();
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



  _toggleLike() {
    this._cardLike.classList.toggle('card__like_active')
  }

  _setEventListeners() {

    this._cardImg.addEventListener('click', () => {

      this._handleCardClick(this._element)
    });

    this._cardLike.addEventListener("click", () => {
      this._toggleLike();
    })
    this.cardEl.querySelector(".card__cleaner").addEventListener("click", () => {
      this.cardEl.remove();

    });
  }
  createCard() {
    this._cardImg = this.cardEl.querySelector(".card__img");
    this._cardText = this.cardEl.querySelector(".card__text");
    this._cardLike = this.cardEl.querySelector(".card__like");
    this._popupImgText = popupImg.querySelector(".popup__text");
    this._setCardValue();
    this._setEventListeners();

    return this.cardEl;
  }

}