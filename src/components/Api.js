class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    getProfile() {
        //console.log('getProfile')
        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/users/me', {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
            // .then(res => {
            //     console.log('res', res)
            // })
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)

    }

    getEditProfile(name, about) {

        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/users/me', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: 'name',
                    about: 'about me'
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    addNewCard(name, link) {

        return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: 'Italia',
                    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    deleteCard(id) {

        return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${id}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }








    // другие методы работы с API
}



export const api = new Api({
    headers: {
        baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
        authorization: '8002b1c6-936e-448e-b4b8-bec58afe72bf',
        'Content-Type': 'application/json'
    }
});