"use strict";

export class FormValidator {
    constructor(config, formElement) {
        this._formSelector = formSelector;
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inactiveButtonClass = inactiveButtonClass;
        this._inputErrorClass = inputErrorClass;
        this._errorClass = errorClass;

        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);

        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);

        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';

    };
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            _showInputError(inputElement, inputElement.validationMessage);
        } else {
            _hideInputError(inputElement);
        }
    };
    _setEventListeners() {
        this._inputElements.forEach(inputElement => {

            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    };

    restartValidation() {
        this._toggleButtonState();
        this._inputElements.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    };

    _disabledButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass)
        this._buttonElement.setAttribute('disabled', 'disabled');
    };

    _enableButton() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    }
    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._removeAttribute();
        }
    };

    _enableValidation() {
        this._setEventListeners();
    };
};