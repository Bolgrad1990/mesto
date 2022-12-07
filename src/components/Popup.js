export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);

        this._closeButton = this._popup.querySelector('.popup__close');

        this._closeEsc = this._handleEscClose.bind(this);

    }


    open() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('click', this._closeEsc);
    }
    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('click', this._closeEsc);
    }


    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }


    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        })
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        })
    }
}