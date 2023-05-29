
export class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;

    this._buttonElement = this._formEl.querySelector(this._settings.submitButtonSelector);
  }
  enableValidation() {

    this._setEventListeners();
  }
  _setEventListeners(_formEl) {
    this._inputList = Array.from(this._formEl.querySelectorAll(this._settings.inputSelector));
    this._inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        this._toggleButtonState();
        this._checkValid(inputEl);


      });
    });

    this._formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });


  }

  _checkValid(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, inputEl.validationMessage);
      return true;
    } else {
      this._hideInputError(inputEl);
      return false;
    }

  }
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  _toggleButtonState() {
    const isValid = this._inputList.every((inputEl) => {
      return !this._checkValid(inputEl);
    });
    if (isValid) {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    }
  }

  _showInputError(inputEl, errorMsg) {
    const inputError = this._formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.add(this._settings.inputErrorClass);
    inputError.textContent = errorMsg;
    inputError.classList.add(this._settings.errorClass);
  }

  _hideInputError(inputEl) {
    const inputError = this._formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.remove(this._settings.inputErrorClass);
    inputError.textContent = '';
    inputError.classList.remove(this._settings.errorClass);
  }

}





