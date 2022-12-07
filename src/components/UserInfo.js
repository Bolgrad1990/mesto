export default class UserInfo {
    constructor({ aboutMe, userName }) {
        this._aboutMe = document.querySelector(aboutMe);
        this._userName = document.querySelector(userName);


    }

    getUserInfo() {
        const userInfo = {
            aboutMe: this._aboutMe.textContent,
            userName: this._userName.textContent,

        }
        return userInfo;

    }

    setUserInfo({ aboutMe, userName }) {
        this._aboutMe.textContent = aboutMe;
        this._userName.textContent = userName;

    }
}