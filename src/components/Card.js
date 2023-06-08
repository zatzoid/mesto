
export class Card {
  constructor(element, tempSelector, handleCardClick, confirm, userId, putLike, disLike) {
    this._element = element;
    this._likes = this._element.likes;
    this._tempSelector = tempSelector;
    this._handleCardClick = handleCardClick;
    this._confirm = confirm
    this.cardEl = this._getTemplate();
    this._owner = element.owner._id;
    this._id = element._id
    this._userId = userId
    this._putLike = putLike
    this._disLike = disLike
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
  likeCount(res) {
    if (res.likes.length > 0) {
      this._cardLikeNmbr.textContent = res.likes.length;
    }
    else {
      this._cardLikeNmbr.textContent = ' '
    }
  }
  _likeCheck() {
    this._likes.forEach(el => {
      if (el._id === this._userId) {
        this._cardLike.classList.add('card__like_active')
      }
    })
  }
  activeLike() {
    this._cardLike.classList.add('card__like_active');
  }
  disLike() {

    this._cardLike.classList.remove('card__like_active');
  }
  _toggleLike() {
    if (this._cardLike.classList.contains('card__like_active')) {

      this._disLike(this._element)
    }
    else {

      this._putLike(this._element)

    }

  }
  
  _setEventListeners() {

    this._cardImg.addEventListener('click', () => {
      console.log(this._element)
      this._handleCardClick(this._element)
    });

    this._cardLike.addEventListener("click", () => {
      this._toggleLike()
    })
    if (this._owner === this._userId) {
      this._cardCleaner.addEventListener("click", () => {
        this._confirm(this._element, this.cardEl)
      })
    }
    else { this._cardCleaner.remove() }

  }
  createCard() {
    this._cardImg = this.cardEl.querySelector(".card__img");
    this._cardText = this.cardEl.querySelector(".card__text");
    this._cardLike = this.cardEl.querySelector(".card__like");
    this._popupImgText = popupImg.querySelector(".popup__text");
    this._cardLikeNmbr = this.cardEl.querySelector('.card__like-nmbr')
    this._cardCleaner = this.cardEl.querySelector(".card__cleaner")
    this._setCardValue();
    this._setEventListeners();
    this._likeCheck();
    this.likeCount(this._element)
    return this.cardEl;
  }

}
