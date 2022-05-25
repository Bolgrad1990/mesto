'use strict';

import { cardImage, cardCaption, modalWindowImage } from './index.js';

export class Card {
    constructor(title, image, cardSelector, openPopup, closePopup) {

        this._title = title;
        this._image = image;
        this._cardSelector = cardSelector;
        this._openPopup = openPopup;
        this._closePopup = closePopup;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.list__element')
            .cloneNode(true);
        return cardElement;
    }

    _handleLikeCard() {
        this._likeBtn.classList.toggle('list__symbol_active');
    }

    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _handleOpenPopup() {
        cardImage.src = this._image;
        cardImage.alt = this._title;
        cardCaption.textContent = this._title;
        this._openPopup(modalWindowImage);
    }

    _setEventListeners() {
        this._likeBtn = this._element.querySelector('.list__symbol');

        this._cardImage.addEventListener('click', () => {
            this._handleOpenPopup();
        })

        this._element.querySelector('.list__delete').addEventListener('click', () => {
            this._handleDeleteCard();
        })

        this._likeBtn.addEventListener('click', () => {
            this._handleLikeCard();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.list__img');
        this._setEventListeners();

        this._element.querySelector('.list__title').textContent = this._title;
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;

        return this._element;
    }
}