import Popup from "./Popup.js";
export default class PopupConfirm extends Popup {
    constructor(popupSelector, submitClbk) {
        super(popupSelector);
        this._submitClbk = submitClbk;
        this._formElement = this._popupEl.querySelector('.popup__form');
    }
    openPopup(cardObj ,cardEl) {
        super.openPopup();
        this._cardEl = cardEl //dom
        this._cardObj = cardObj //json
    }
    setEventListeners() {

        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            
            this._submitClbk(this._cardObj ,this._cardEl)
            super.closePopup()
        })
    }

}