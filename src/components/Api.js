class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl
        this.headers = headers;
    }

    getProfile() {
        console.log('getProfile')
        fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        }).then(res => {
            console.log('res', res)
        })
    }

    getInitialCards() {
        // ...
    }

    // другие методы работы с API
}

export const api = new Api({
    headers: {
        baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
        authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
        'Content-Type': 'application/json'
    }
});