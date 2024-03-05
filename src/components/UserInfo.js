export default class UserInfo {
  constructor({ profileTitle, profileDescription }) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileDescription = document.querySelector(profileDescription);
  }

  getUserInfo() {
    const userCurrentInfo = {};
    userCurrentInfo = this._profileTitle.textContent;
    userCurrentInfo = this._profileDescription.textContent;
    return userCurrentInfo;
  }

  setUserInfo(data) {
    this._profileTitle.textContent = data.title;
    this._profileDescription = data.description;
  }
}
