import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSabmitProfileForm }) {
        super(popupSelector)
        this._popupForm = this._popup.querySelector('.form');
        this._inputElements = this._popupForm.querySelectorAll('.form__input');
        this._handleSabmitProfileForm = handleSabmitProfileForm;

    }
    _getInputValues() {

        this._formValues = {};
        this._inputElements.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        console.log(this._formValues)
        return this._formValues;
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

}