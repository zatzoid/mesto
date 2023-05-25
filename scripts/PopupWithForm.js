import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._formElement = this._popupEl.querySelector('.popup__form');
  }
  //собирает и хранит в себе данные ИНПУТОВ
  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll('.popup__element');

    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    /* console.log(this._formValues) */
    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues()) ;
      this.closePopup();
    });
  }

  closePopup() {

    super.closePopup();
    this._formElement.reset();//надо пофиксить сброс при изменении статуса и не ресетает аддформу
  }
}
