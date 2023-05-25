import Popup from "./popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSeclector) {
      super(popupSeclector);
      this._popupSel = popupSeclector;
      this._popupEl = document.querySelector(this._popupSel);
      this._popupImgEl = this._popupEl.querySelector(".popup__img");
      this._popupImgText = this._popupEl.querySelector(".popup__text");
    }
    _setValue(element) {
      this._popupImgEl.src = element.link;
      this._popupImgEl.alt = element.name;
      this._popupImgText.textContent = element.name;
    }
    openPopupWithImage(element) {
      super.openPopup();
      this._setValue(element);
    }
  }