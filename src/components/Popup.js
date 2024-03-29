export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__close');
        this._closeEsc = this._handleEscClose.bind(this);
    }


    open() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keyup', this._closeEsc);
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keyup', this._closeEsc);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
            if (
                evt.target.classList.contains("popup_is-opened") ||
                evt.target.classList.contains("popup__close")
            ) {
                this.close();
            }
        });
    }
}