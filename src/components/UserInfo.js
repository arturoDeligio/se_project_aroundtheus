export default class UserInfo {
  constructor({ profileTitle, profileDescrption }) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileDescrption = document.querySelector(profileDescrption);
  }

  getUserInfo() {
    const userInfo = {};
    userInputData.title = this._profileTitle.textContent;
    userInputData.description = this._profileDescrption.textContent;
    return userInfo;
  }

  setUserInfo(data) {
    this._profileTitle.textContent = data.title;
    this._profileDescrption = data.description;
  }
}
