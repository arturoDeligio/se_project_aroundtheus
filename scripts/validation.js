// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListenders(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [
    ...formElement.querySelectorAll(options.inputSelector),
  ];
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {});
  });
}

function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListenders(formElement, options);
    //look for all inputs inside forms
    //loop through each input to see if valid
    //if input not valid grab validation message
    //add error class to input
    //display error message
    //button disable
    //if all inputs valid then enable button
    //reset error message
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
