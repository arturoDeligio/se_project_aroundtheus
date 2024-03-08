import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  validationSettings,
  profileEditButton,
  addNewCardButton,
  formList,
  editModalInputTitle,
  editModalDescription,
  formValidators,
  cardSelector,
  forms,
} from "../utils/constants.js";

import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupwithForm.js";

import "./index.css";

/* -------------------------------------------------------------------------- */
/*                                  elements                                  */
/* -------------------------------------------------------------------------- */
const userInfo = new UserInfo({
  profileTitle: ".profile__title",
  profileDescription: ".profile__description",
});

formList.forEach((form) => {
  const validator = new FormValidator(validationSettings, form);
  validator.enableValidation();
  formValidators[form.name] = validator;
  forms[form.name] = form;
});

const editModalWithForm = new PopupWithForm(
  {
    popupSelector: "#profile-edit-modal",
  },
  handleProfileEditSubmit
);

const addCardWithForm = new PopupWithForm(
  {
    popupSelector: "#add-card-modal",
  },
  handleAddCardFormSubmit
);

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

// /* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */

function createCard(cardData) {
  const card = new Card(cardData, cardSelector, handleImageClick);

  const cardElement = card.getView();
  return cardElement;
}

function handleImageClick(name, link) {
  modalWithImage.open({ name, link });
}

function fillUserData() {
  const userData = userInfo.getUserInfo();
  editModalInputTitle.value = userData.title;
  editModalDescription.value = userData.description.trim();
}

/* -------------------------------------------------------------------------- */
/*                               Events handlers                              */
/* -------------------------------------------------------------------------- */

function handleProfileEditSubmit(value) {
  userInfo.setUserInfo(value);
  editModalWithForm.close();
}

function handleAddCardFormSubmit({ title, link }) {
  const newCard = createCard({ name: title, link });
  cardsRenderer.addItem(newCard);
  formValidators["addCardForm"].disableButton();
  forms.addCardForm.reset();
  addCardWithForm.close();
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  fillUserData();

  formValidators["editCardForm"].resetValidation();
  editModalWithForm.open();
});

addNewCardButton.addEventListener("click", () => addCardWithForm.open());

cardsRenderer.renderItems();

editModalWithForm.setEventListeners();

// const profileEditButton = document.querySelector("#profile-edit-button");
// const profileEditModal = document.querySelector("#profile-edit-modal");

// const addCardModal = document.querySelector("#add-card-modal");

// const addNewCardButton = document.querySelector("#profile-add-button");

// const addCardFormElement = document.forms["add-card-form"];

// const profileTitle = document.querySelector("#profile-title");
// const profileDescription = document.querySelector("#profile-description");
// const profileEditTitleInput = document.querySelector("#profile-title-input");
// const profileEditDescrptionInput = document.querySelector(
//   "#profile-description-input"
// );

// console.log(formList);
// console.log(editProfileInputList);
// const profileEditForm = document.forms["edit-card-form"];
// const cardListEl = document.querySelector(".cards__gallery");

// const cardSelector = "#card-template";

// const cardTitleInput = addCardFormElement.querySelector("#card-title-input");
// const cardUrlInput = addCardFormElement.querySelector("#card-url-input");

// const previewImageModal = document.querySelector("#preview__image-modal");
// const previewImage = previewImageModal.querySelector(".modal__preview-image");
// const previewImageTitle = previewImageModal.querySelector(
//   ".modal__preview-title"
// );

// const modals = document.querySelectorAll(".modal");
// /* ---------------------------------------------------
