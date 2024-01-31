class FormValidator {
  constructor(settings, formElement) {
    this._form = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  //   toggleButtonState(inputElements, submitButton, { inactiveButtonClass }) {
  //     if (hasInvalidInput(inputElements)) {
  //       disableButton(submitButton, inactiveButtonClass);
  //       return;
  //     }
  //     enableButton(submitButton, inactiveButtonClass);
  //   }

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

const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addForm);
editFormValidator.enableValidation();
