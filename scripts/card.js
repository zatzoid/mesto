
  export class Card {
    constructor(element, tempSelector) {
      this._element = element;
      this._tempSelector = tempSelector;
  
    }
    _getTemplate() {
      const cardTemplate = document.querySelector(this._tempSelector).content;
      const cardEl = cardTemplate.querySelector(".card").cloneNode(true);
      return cardEl;
  
    }
    _setCardValue(cardEl) {
      const cardImg = cardEl.querySelector(".card__img");
      const cardText = cardEl.querySelector(".card__text");
  
      cardImg.src = this._element.link;
      cardImg.alt = this._element.name;
      cardText.textContent = this._element.name;
  
    }
  
  
  
    _like(cardEl) {
      cardEl.querySelector(".card__like").classList.toggle('card__like_active')
    }
    _popupImg() {
      const popupImgEl = popupImg.querySelector(".popup__img");
      const popupImgText = popupImg.querySelector(".popup__text");
      openPopup(popupImg);
      popupImgEl.src = this._element.link;
      popupImgEl.alt = this._element.name;
      popupImgText.textContent = this._element.name
  
    }
    _setEventListeners(cardEl) {
  
      cardEl.querySelector(".card__img").addEventListener("click", () => {
        this._popupImg()
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
      this._setCardValue(cardEl);
      this._setEventListeners(cardEl);
  
      return cardEl;
    }
  
  }