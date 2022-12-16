import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSabmitProfileForm }) {
        super(popupSelector)
        this._popupForm = this._popup.querySelector('.form');
        this._inputElements = this._popupForm.querySelectorAll('.form__input');
        this._buttonSubmitForm = this._popupForm.querySelector('.form__button');
        this._handleSabmitProfileForm = handleSabmitProfileForm;

    }
    _getInputValues() {

        this._formValues = {};
        this._inputElements.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    changeSabmitHandler(newSabmitHandler) {
        this._handleSabmitProfileForm = newSabmitHandler;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._handleSabmitProfileForm(this._getInputValues());
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