export default class UserInfo {
    constructor({ aboutMeSelector, userNameSelector, avatarSelector }) {
        this._aboutMe = document.querySelector(aboutMeSelector);
        this._userName = document.querySelector(userNameSelector);
        this._avatar = document.querySelector(avatarSelector);


    }


    getUserInfo() {
        const userInfo = {
            aboutMe: this._aboutMe.textContent,
            userName: this._userName.textContent,
            avatar: this._avatar.src,

        }
        return userInfo;

    }

    setUserInfo(data) {
        this._aboutMe.textContent = data.aboutMe;
        this._userName.textContent = data.userName;
        this._avatar.src = data.avatar;
        this._id = data._id;
        console.log(data)


    }
    getUserId() {
        return this._id;
    }
}