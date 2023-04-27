const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__element',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup_input-error',
  errorClass: 'popup__element-error'

}

function enableValidation({ formSelector, ...rest }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formEl, rest)

  })

}
const setEventListeners = (formEl, { inputSelector, submitButtonSelector, ...rest }) => {
  const inputList = Array.from(formEl.querySelectorAll(inputSelector));
  const btnEl = formEl.querySelector(submitButtonSelector);

  toggleButtonState(inputList, btnEl, rest);


  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', function () {
      toggleButtonState(inputList, btnEl, rest)
      checkValid(formEl, inputEl, rest)
    })
  })

}

const hasInvalidInput = (inputList) => {

  return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  })
}
const checkValid = (formEl, inputEl, { ...rest }) => {

  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage, rest);
  }
  else {
    hideInputError(formEl, inputEl, rest);
  }
}
/* костыль, дизейблит кнопку сейва при открытии*/
function disableBtnSubmit(btnEl) {
  btnEl.classList.add('popup__save_disabled')
  btnEl.setAttribute('disabled', true);
}
const toggleButtonState = (inputList, btnEl, { inactiveButtonClass, ...rest }) => {
 
  if (hasInvalidInput(inputList, rest)) {
    disableBtnSubmit(btnEl)
  }
  else {
    btnEl.classList.remove(inactiveButtonClass);
    btnEl.removeAttribute('disabled', true);
  }
}
const showInputError = (formEl, inputEl, errorMsg, { inputErrorClass, errorClass }) => {
  const inputError = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  inputError.textContent = errorMsg;
  inputError.classList.add(errorClass);

}
const hideInputError = (formEl, inputEl, { inputErrorClass, errorClass }) => {
  const inputError = formEl.querySelector(`.${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  inputError.textContent = '';
  inputError.classList.remove(errorClass);

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