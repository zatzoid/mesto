export default class Popup {
    constructor(popupSeclector) {
        this._popupSel = popupSeclector;
        this._popupEl = document.querySelector(this._popupSel);
        
        this._closePopupClick = this._closePopupClick.bind(this);
        this._closePopupEsc = this._closePopupEsc.bind(this);

    }
    openPopup() {
        this._popupEl.classList.add("popup_opened");
        this._closeBtn = this._popupEl.querySelector('.popup__close');
        this.setEventListeners();
    }
    closePopup() {
        this._popupEl.classList.remove("popup_opened");
        this._popupEl.removeEventListener('click', this._closePopupClick);
        document.removeEventListener('keydown', this._closePopupEsc);
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
        document.addEventListener('keydown', this._closePopupEsc)
        this._closeBtn.addEventListener('click', this.closePopup.bind(this))
    }
}

