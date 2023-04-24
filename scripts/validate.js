
const config = {

  formSelector: '.popup__form',
  inputSelector: '.popup__element',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup_input-error',
  errorClass: 'popup__element-error'


}

const showInputError = (formEl, inputEl, errorMsg) => {
  const inputError = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.add(config.inputErrorClass);
  inputError.textContent = errorMsg;
  inputError.classList.add(config.errorClass);

}
const hideInputError = (formEl, inputEl) => {
  const inputError = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.remove(config.inputErrorClass);
  inputError.textContent = '';
  inputError.classList.remove(config.errorClass);

}

const checkValid = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  }
  else {
    hideInputError(formEl, inputEl);
  }

}
const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const btnEl = formEl.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, btnEl);
  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', function () {
      checkValid(formEl, inputEl)
      toggleButtonState(inputList, btnEl)
    })
  })
}
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formEl)
  })

}
const hasInvalidInput = (inputList) => {
  return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  })
}
const toggleButtonState = (inputList, btnEl) => {
  if (hasInvalidInput(inputList)) {
    btnEl.classList.add(config.inactiveButtonClass)
  }
  else {
    btnEl.classList.remove(config.inactiveButtonClass)
  }
}
enableValidation(config)



/* рабочий 
const showInputError = (formEl, inputEl, errorMsg) => {
  const inputError = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.add('popup__element_error');
  inputError.textContent = errorMsg;
  inputError.classList.add('popup__element-error');

}
const hideInputError = (formEl, inputEl) => {
  const inputError = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.remove('popup__element_error');
  inputError.textContent = '';
  inputError.classList.remove('popup__element-error');

}

const validator = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  }
  else {
    hideInputError(formEl, inputEl);
  }

}
const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll('.popup__element'));
  const btnEl = formEl.querySelector('.popup__save');
  toggleButtonState(inputList, btnEl);
  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', function () {
      validator(formEl, inputEl)
toggleButtonState(inputList, btnEl)
    })
  })
}
function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formEl)
  })

}
const hasInvalidInput = (inputList) => {
  return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  })
}
const toggleButtonState = (inputList, btnEl) => {
  if (hasInvalidInput(inputList)){
  btnEl.classList.add('popup_disabled')
  }
  else{
    btnEl.classList.remove('popup_disabled')
  }
}
enableValidation()*/