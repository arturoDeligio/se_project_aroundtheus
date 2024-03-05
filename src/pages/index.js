import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import * as constants from "../components/utils/constants.js";

import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupwithForm.js";

import "./index.css";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  elements                                  */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");

const addCardModal = document.querySelector("#add-card-modal");

const addNewCardButton = document.querySelector("#profile-add-button");

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

const previewImageModal = document.querySelector("#preview__image-modal");
const previewImage = previewImageModal.querySelector(".modal__preview-image");
const previewImageTitle = previewImageModal.querySelector(
  ".modal__preview-title"
);

const modals = document.querySelectorAll(".modal");
/* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closePopupEscapeKey);
}

function closePopupEscapeKey(evt) {
  if (evt.key === "Escape") {
    const popupOpen = document.querySelector(".modal_opened");
    closePopup(popupOpen);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closePopupEscapeKey);
}

function createCard(cardData) {
  const card = new Card(cardData, cardSelector, handleImageClick);

  const cardElement = card.getView();
  return cardElement;
}

function renderCard(cardData, wrapper) {
  const cardElement = createCard(cardData);
  wrapper.prepend(cardElement);
}

// function handleImageClick(name, link) {
//   previewImage.setAttribute("src", link);
//   previewImage.setAttribute("alt", name);
//   previewImageTitle.textContent = name;
//   openModal(previewImageModal);
// }

/* -------------------------------------------------------------------------- */
/*                               Events handlers                              */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileEditTitleInput.value;
  profileDescription.textContent = profileEditDescrptionInput.value;
  editFormValidator.disableButton();
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  e.target.reset();
  addFormValidator.disableButton();
  closePopup(addCardModal);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileEditTitleInput.value = profileTitle.textContent;
  profileEditDescrptionInput.value = profileDescription.textContent.trim();
  editFormValidator.disableButton();
  openModal(profileEditModal);
});

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      closePopup(modal);
    }
    if (evt.target.classList.contains("modal__close")) {
      closePopup(modal);
    }
  });
});

addNewCardButton.addEventListener("click", () => openModal(addCardModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

/* -------------------------------------------------------------------------- */
/*                                 validation settings                               */
/* -------------------------------------------------------------------------- */

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

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

//new Section({renderer: function()}, containerSelector)

const editProfileModalWithForm = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: handleProfileEditSubmit,
});
editProfileModalWithForm._getInputValues();

const addCardWithForm = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: handleAddCardFormSubmit,
});

addCardWithForm._getInputValues();

const modalWithImage = new PopupWithImage({
  popupSelector: "#preview__image-modal",
});

function handleImageClick(name, link) {
  modalWithImage.open({ name, link });
}
