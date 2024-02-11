export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  getCardElement() {
    this._cardElement = cardTemplate.cloneNode(true);
    this._cardImageEl = cardElement.querySelector(".card__image");
    this._cardTitleEl = cardElement.querySelector(".card__title");
    this._likeButton = cardElement.querySelector(".card__like-button");
    this._cardDeleteButton = cardElement.querySelector(".card__trash-button");

    cardDeleteButton.addEventListener("click", () => {
      cardElement.remove();
    });
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon(this);
      });
    this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    //".card__like-button"
    //".card__trash-button"
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    // get the card view
    // set evt listeners
    //return card
    this._setEventListeners();
  }
}
