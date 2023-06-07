export default class UserInfo {
  constructor({ nameProfile, statusProfile, avatar }) {
    this._nameProfile = document.querySelector(nameProfile);
    this._statusProfile = document.querySelector(statusProfile);
    this._avatar = document.querySelector(avatar)

  }
  getUserInfo() {
    const userInfo = {
      name: this._nameProfile.textContent,
      about: this._statusProfile.textContent
    }

    return userInfo;
  }

  setUserInfo(data) {
    this._nameProfile.textContent = data.name;
    this._statusProfile.textContent = data.about;

  }
  setUserAvatar(data) {
    this._avatar.src = data.avatar
  }
}