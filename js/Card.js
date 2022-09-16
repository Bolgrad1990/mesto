"use strict";

import { modalWindowImage, cardImage, cardCaption } from './index.js';

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


    _leadLikeCard() {
        const likeBtn = document.querySelector('.list__symbol');
        likeBtn.classList.toggle('list__symbol_active');
    }
    _leadDelCard() {
        this._element.remove();
        this._element = null;
    };
    _leadOpenPopup() {
        cardImage.alt = this._title;
        cardImage.src = this._image;
        cardCaption.textContent = this._title;

        this._openPopup(modalWindowImage);
    }

    _setEventListeners() {
        // this._likeBtn = this._element.querySelector('.list__symbol');
        // this._cardImage.addEventListener('click', () => {
        this._element.querySelector('.list__img').addEventListener('click', () => {
            this._leadOpenPopup();
        });

        // this._element.querySelector('.list__delete').addEventListener('click', () => {
        this._element.querySelector('.list__delete').addEventListener('click', () => {
            this._leadDelCard();
        });

        //this._likeBtn.addEventListener('click', () => {
        this._element.querySelector('.list__symbol').addEventListener('click', () => {
            this._leadLikeCard();
        });
    }

    createCard() {
        this._element = this._getTemplate();
        //this._cardImage = this._element.querySelector('.list__img');
        this._setEventListeners();

        //this._element.querySelector('.list__title').textContent = this._title;
        //this._cardImage.alt = this._title;
        //this._cardImage.src = this._image;
        this._element.querySelector('.list__title').textContent = this._title;
        this._element.querySelector('.list__img').src = this._image;
        this._element.querySelector('.list__img').alt = this._title;

        return this._element;
    }
}