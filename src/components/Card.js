"use strict";

export default class Card {
    constructor({ data, handleClickCard }, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleClickCard = handleClickCard;
        this._cardSelector = cardSelector;
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

    _handleDelCard() {
        this._element.remove();
        this._element = null;
    };

    _setEventListeners() {
        this._likeBtn = this._element.querySelector('.list__symbol');


        this._image.addEventListener('click', () => {
            this._handleClickCard(this._name, this._link)
        })


        this._element.querySelector('.list__delete').addEventListener('click', () => {
            this._handleDelCard();
        })


        this._likeBtn.addEventListener('click', () => {
            this._handleLikeCard();
        });
    }

    createCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.list__img');
        this._setEventListeners();

        this._element.querySelector('.list__title').textContent = this._name;
        this._image.src = this._link;
        this._element.querySelector('.list__img').alt = this._name;

        return this._element;
    }
}