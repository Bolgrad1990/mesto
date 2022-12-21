import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitProfileForm }) {
        super(popupSelector)
        this._popupForm = this._popup.querySelector('.form');
        this._inputElements = this._popupForm.querySelectorAll('.form__input');
        this._buttonSubmitForm = this._popupForm.querySelector('.form__button');
        this.handleSubmitProfileForm = handleSubmitProfileForm;
    }
    _getInputValues() {
        this._formValues = {};
        this._inputElements.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setInputValues(data) {
        this._inputElements.forEach((input) => {
            if (data[input.name]) {
                input.value = data[input.name];
            }
        });
    }

    changeSabmitHandler(newSabmitHandler) {
        this.handleSubmitProfileForm = newSabmitHandler;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleSubmitProfileForm(this._getInputValues());
        })
    }

    close() {
        super.close()
        this._popupForm.reset()
    }

    loading(isLoading) {
        if (isLoading) {
            this._buttonSubmitForm.textContent = 'Сохранение...';
        } else {
            this._buttonSubmitForm.textContent = 'Сохранить';
        }
    }
}