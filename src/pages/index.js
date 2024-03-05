import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  validationSettings,
  profileEditButton,
  addNewCardButton,
} from "../components/utils/constants.js";

import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupwithForm.js";

import "./index.css";

/* -------------------------------------------------------------------------- */
/*                                  elements                                  */
/* -------------------------------------------------------------------------- */
// const profileEditButton = document.querySelector("#profile-edit-button");
// const profileEditModal = document.querySelector("#profile-edit-modal");

// const addCardModal = document.querySelector("#add-card-modal");

// const addNewCardButton = document.querySelector("#profile-add-button");

const addCardFormElement = document.forms["add-card-form"];

const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileEditTitleInput = document.querySelector("#profile-title-input");
const profileEditDescrptionInput = document.querySelector(
  "#profile-description-input"
);

const profileEditForm = document.forms["edit-card-form"];
const cardListEl = document.querySelector(".cards__gallery");

const cardSelector = "#card-template";

const cardTitleInput = addCardFormElement.querySelector("#card-title-input");
const cardUrlInput = addCardFormElement.querySelector("#card-url-input");

// const previewImageModal = document.querySelector("#preview__image-modal");
// const previewImage = previewImageModal.querySelector(".modal__preview-image");
// const previewImageTitle = previewImageModal.querySelector(
//   ".modal__preview-title"
// );

// const modals = document.querySelectorAll(".modal");
// /* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */

function createCard(cardData) {
  const card = new Card(cardData, cardSelector, handleImageClick);

  const cardElement = card.getView();
  return cardElement;
}

function renderCard(cardData, wrapper) {
  const cardElement = createCard(cardData);
  wrapper.prepend(cardElement);
}

function handleImageClick(name, link) {
  modalWithImage.open({ name, link });
}

/* -------------------------------------------------------------------------- */
/*                               Events handlers                              */
/* -------------------------------------------------------------------------- */
// function handleProfileEditSubmit(e) {
//   e.preventDefault();
//   profileTitle.textContent = profileEditTitleInput.value;
//   profileDescription.textContent = profileEditDescrptionInput.value;
//   editFormValidator.disableButton();
//   editModalWithForm.close();
// }

function handleProfileEditSubmit(data) {
  userInfo.setUserInfo(data);
  editModalWithForm.close();
}

function handleAddCardFormSubmit(e) {
  const newCard = createCard(data);
  cardsRenderer.addItem(newCard);
  addFormValidator.disableButton();
  addFormValidator.resetValidation();
  addCardWithForm.close();
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  const userInputData = userInfo.getUserInfo();
  profileEditTitleInput.value = userInputData.textContent;
  profileEditDescrptionInput.value = userInputData.textContent.trim();
  editFormValidator.disableButton();
  editModalWithForm.open();
});

// modals.forEach((modal) => {
//   modal.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("modal_opened")) {
//       closePopup(modal);
//     }
//     if (evt.target.classList.contains("modal__close")) {
//       closePopup(modal);
//     }
//   });
// });

addNewCardButton.addEventListener("click", () => addCardWithForm.open());

// profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

/* -------------------------------------------------------------------------- */
/*                                 validation settings                               */
/* -------------------------------------------------------------------------- */
const userInfo = new UserInfo({
  profileTitle: ".profile__title",
  profileDescription: ".profile__description",
});

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const addFormValidator = new FormValidator(
  validationSettings,
  addCardFormElement
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const editModalWithForm = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: handleProfileEditSubmit,
});

editModalWithForm._getInputValues();
editModalWithForm.setEventListeners();

const addCardWithForm = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: handleAddCardFormSubmit,
});

addCardWithForm._getInputValues();
addCardWithForm.setEventListeners();

const modalWithImage = new PopupWithImage({
  popupSelector: "#preview__image-modal",
});

modalWithImage.setEventListeners();

const cardsRenderer = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  ".cards__gallery"
);

cardsRenderer.renderItems();
