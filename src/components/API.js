export default class API {
    constructor(options) {
        this._link = options.link
        this._headers = options.headers
    }
    _errorCheck(res) {
        if (res.ok) {
            return res.json();
        }
        else {
           return Promise.reject(res.status)
        }
    }
    defaultImg() {
        return fetch(`${this._link}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._errorCheck)

    }
    getUserInfo() {
        return fetch(`${this._link}/users/me`, {
            method: 'GET',
            headers: this._headers



        }).then(this._errorCheck)
    }
    changeUserInfo(data) {
        return fetch(`${this._link}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(this._errorCheck)
    }
    createNewCard(data) {
        return fetch(`${this._link}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._errorCheck)
    }
    deleteCard(cardId) {
        return fetch(`${this._link}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._errorCheck)
    }

    putLike(cardId) {
        return fetch(`${this._link}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers
        })
            .then(this._errorCheck);
    }

    disLike(cardId) {
        return fetch(`${this._link}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._errorCheck)
    }
    changeAvatar(data) {
        return fetch(`${this._link}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._errorCheck)
    }

}



/* https://mesto.nomoreparties.co/v1/cohort-68/cards */
/* 0d4f9f4d-4868-45fa-840e-d7c93dc88c5e */