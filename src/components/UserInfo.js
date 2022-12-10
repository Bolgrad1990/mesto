export default class UserInfo {
    constructor({ aboutMeSelector, userNameSelector }) {
        this._aboutMe = document.querySelector(aboutMeSelector);
        this._userName = document.querySelector(userNameSelector);


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