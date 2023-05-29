export default class Popup {
    constructor(popupSeclector) {
        this._popupSel = popupSeclector;
        this._popupEl = document.querySelector(this._popupSel);
        this._closeBtn = this._popupEl.querySelector('.popup__close');
        this._closePopupClick = this._closePopupClick.bind(this);
        this._closePopupEsc = this._closePopupEsc.bind(this);


    }
    openPopup() {
        this._popupEl.classList.add("popup_opened");
        document.addEventListener('keydown', this._closePopupEsc)
    }
    closePopup() {
        this._popupEl.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._closePopupEsc)
    }
    _closePopupClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.closePopup()
        }
    }
    _closePopupEsc(evt) {
        if (evt.key === 'Escape') {
            this.closePopup()
        }
    }
    setEventListeners() {
        this._popupEl.addEventListener('click', this._closePopupClick);
        this._closeBtn.addEventListener('click', this.closePopup.bind(this))
    }
}

