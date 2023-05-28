import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._formElement = this._popupEl.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll('.popup__element');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
    });

  }

  closePopup() {
    super.closePopup();
    this._formElement.reset();
  }
}
