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
const profileModalCloseButton = document.querySelector("#profile-close-modal");

const addCardModal = document.querySelector("#add-card-modal");
const addCardModalCloseButton = document.querySelector(
  "#profile-card-close-modal"
);
const AddNewCardButton = document.querySelector("#profile-add-button");

const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileEditTitleInput = document.querySelector("#profile-title-input");
const profileEditDescrptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__gallery");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */
function closePopop(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

// function openModal() {
//   profileEditTitleInput.value = profileTitle.textContent;
//   profileEditDescrptionInput.value = profileDescription.textContent.trim();

//   profileEditModal.classList.add("modal_opened");
// }

function openModal(modal) {
  modal.classList.add("modal_opened");
}

/* -------------------------------------------------------------------------- */
/*                               Events handlers                              */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileEditTitleInput.value;
  profileDescription.textContent = profileEditDescrptionInput.value;
  closePopop(profileEditModal);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileEditTitleInput.value = profileTitle.textContent;
  profileEditDescrptionInput.value = profileDescription.textContent.trim();
  openModal(profileEditModal);
});
profileModalCloseButton.addEventListener("click", () =>
  closePopop(profileEditModal)
);

AddNewCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  closePopop(addCardModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
