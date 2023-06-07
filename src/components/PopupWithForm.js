import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._formElement = this._popupEl.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__element');
    this._subBtn = this._formElement.querySelector('.popup__save')
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
  loading(boolean, text){
  if(boolean){
    this._subBtn.textContent = text
  }
  
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
