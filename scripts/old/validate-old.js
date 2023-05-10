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
  
  function disableBtnSubmit(btnEl) {
    btnEl.classList.add(config.inactiveButtonClass)
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
  
  
  
  