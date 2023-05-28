export default class UserInfo {
  constructor({ nameProfile, statusProfile }) {
    this._nameProfile = document.querySelector(nameProfile);
    this._statusProfile = document.querySelector(statusProfile);

  }
  getUserInfo() {
    const userInfo = {
      name: this._nameProfile.textContent,
      status: this._statusProfile.textContent
    }

    return userInfo;
  }

  setUserInfo({ redactorName, redactorStatus } ) {
    console.log({ redactorName, redactorStatus })
    this._nameProfile.textContent = redactorName;
    this._statusProfile.textContent = redactorStatus;
  }
}