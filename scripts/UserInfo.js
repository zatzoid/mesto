export default class UserInfo {
    constructor({ nameProfile, statusProfile }) {
      this._nameProfile = document.querySelector(nameProfile);
      this._statusProfile = document.querySelector(statusProfile);
     
    }
    getUserInfo() {
      const name = this._nameProfile.textContent;
  
      const status = this._statusProfile.textContent;
      return { name, status };
    }
  
    setUserInfo({inputValues}) {
  console.log(inputValues)
      this._nameProfile.textContent =  inputValues.redactorName  ;
      this._statusProfile.textContent =  inputValues.redactorStatus;
    }
  }