import { data } from "autoprefixer"

export default class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    getProfile() { //////////////////////////////////////////////////////////
        //console.log('getProfile')
        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/users/me', {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)

    }

    getInitialCards() { //////////////////////////////////////////////////////////////////////
        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)

    }

    getEditProfile(data) { ///////////////////////////////////////////////////////// 

        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/users/me', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.about
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    addNewCard(data) { //////////////////////////////////////////////////////////////////////

        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    deleteCard(_id) { /////////////////////////////////////////////////////////////////////

        return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${_id}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    addLikeCard(_id) { //////////////////////////////////////////////////////////////////////////

        return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${_id}/likes`, {
                method: 'PUT',
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }
    deleteLikeCard(_id) { //////////////////////////////////////////////////////////////////////////

        return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${_id}/likes`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    updateProfile(data) { //////////////////////////////////////////////////////////////////////////

        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/user/me/avatar', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: data.avatar
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }


}



export const api = new Api({

    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
    headers: {
        authorization: '8002b1c6-936e-448e-b4b8-bec58afe72bf',
        'Content-Type': 'application/json'
    }
});