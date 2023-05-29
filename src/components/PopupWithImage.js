import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSeclector) {
      super(popupSeclector);
     
      this._popupImgEl = this._popupEl.querySelector(".popup__img");
      this._popupImgText = this._popupEl.querySelector(".popup__text");
    }
    _setValue(element) {
      this._popupImgEl.src = element.link;
      this._popupImgEl.alt = element.name;
      this._popupImgText.textContent = element.name;
    }
    openPopup(element) {
      super.openPopup();
      this._setValue(element);
    }
  }