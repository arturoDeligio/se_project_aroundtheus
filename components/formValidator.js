class FormValidator {
  constructor(settings, formElement) {
    this._form = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _showInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _checkInputValidity() {
    if (!this._form.validity.valid) {
      return showInputError(formElement, inputElement, options);
    }
    hideInputError(formElement, inputElement, options);
  }

  _hasInvalidInput() {
    return !inputList.every((inputElement) => inputElement.validity.valid);
  }

  _disableButton() {
    this._submitButtonSelector.add(this._inactiveButtonClass);
    this._submitButtonSelector.disabled = true;
  }

  _enableButton() {
    this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
    this._submitButtonSelector.disabled = false;
  }

  _toggleButtonState(inputElements, submitButton, { inactiveButtonClass }) {
    if (hasInvalidInput(inputElements)) {
      disableButton(submitButton, inactiveButtonClass);
      return;
    }
    _enableButton(submitButton, inactiveButtonClass);
  }

  _setEventListenders() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        checkInputValidity(this._form, inputElement, options);
        toggleButtonState(inputElements, submitButton, options);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    _setEventListenders(formElement, options);
  }
}

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// const editFormValidator = new FormValidator(settings, editForm);
// const addFormValidator = new FormValidator(settings, addForm);
// editFormValidator.enableValidation();

export default FormValidator;
