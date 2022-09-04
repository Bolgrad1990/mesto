"use strict";

import { modalWindowImage, cardImage, cardCaption } from './index.js';

export class Card {
    constructor(title, img, cardSelector, openPopup, closePopup) {
        this._title = title;
        this._img = img;
        this._cardSelector = cardSelector;
        this._openPopup = openPopup;
        this._closePopup = closePopup;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.list-element').cloneNode(true);

        return cardElement;
    };
    _leadLikeCard() {
        this._likeBtn.classList.toggle('list__toggle_active');
    }
    _leadDelCard() {
        this._element.remove();
        this._element = null;
    };
    _leadOpenPopup() {
        cardImage.alt = this._title;
        cardImage.src = this._img;
        cardCaption.textContent = this._title;

        this._openPopup(modalWindowImage);
    }

    _setEventListeners() {
        this._likeBtn = this._element.querySelector('.list__symbol');
        this._cardImage.addEventListener('click', () => {
            this._leadOpenPopup();
        });

        this._element.querySelector('.list__delete').addEventListener('click', () => {
            this._leadDelCard();
        });

        this._likeBtn.addEventListener('click', () => {
            this._leadLikeCard();
        });
    }

    createCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.list__img');
        this._setEventListeners();

        this._element.querySelector('.list__title').textContent = this._title;
        this._cardImage.alt = this._title;
        this._cardImage.src = this._img;

        return this._element;
    }
}