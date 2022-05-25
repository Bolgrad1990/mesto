"use strict";

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const aboutProjektLink = document.querySelector('.profile__button-popup');
const cardsAddBtn = document.querySelector('.profile__button-add');
const modalWindowEdit = document.querySelector('.popup_type_edit');
const formElement = modalWindowEdit.querySelector('[name="editForm"]');
const nameInputForm = formElement.querySelector('.form__input_type_name');
const aboutMeInput = formElement.querySelector('.form__input_type_job');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const modalWindowCards = document.querySelector('.popup_type_cards');
const formCardsAdd = document.querySelector('[name="cardsForm"]');
const placeInput = formCardsAdd.querySelector('[name="place"]');
const linkInput = formCardsAdd.querySelector('[name="link"]');
const buttonElement = formCardsAdd.querySelector('.form__button');
//const template = document.querySelector('.template');

const modalWindowImage = document.querySelector('.popup_type_image');
const cardImage = modalWindowImage.querySelector('.popup__image');
const cardCaption = modalWindowImage.querySelector('.popup__caption');


const popups = document.querySelectorAll('.popup');
const listContainer = document.querySelector('.list');

const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
};

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            closePopup(popup);
        }
    });
});

function openPopup(modalWindowEdit) {
    document.addEventListener('keyup', handleEscUp);
    modalWindowEdit.classList.add('popup_is-opened');
};

function closePopup(popup) {
    document.removeEventListener('keyup', handleEscUp);
    popup.classList.remove('popup_is-opened');
};

const handleEscUp = (evt) => {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_is-opened');
        closePopup(activePopup);
    };
};

aboutProjektLink.addEventListener('click', function() {
    nameInputForm.value = profileTitle.textContent;
    aboutMeInput.value = profileSubtitle.textContent;
    formEditProfileValidator.resetValidation();
    openPopup(modalWindowEdit);
});

cardsAddBtn.addEventListener('click', () => {
    formAddNewCardValidator.resetValidation();
    openPopup(modalWindowCards);
});


function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInputForm.value;
    profileSubtitle.textContent = aboutMeInput.value;
    closePopup(modalWindowEdit);
};



const renderInitialCards = (array) => {
    array.forEach((item) => {
        addCard(item.name, item.link);
    })
}

function createCard(title, image) {
    const card = new Card(title, image, '.template', openPopup, closePopup);
    const cardElement = card.generateCard();
    return cardElement
}

const addCard = (title, image) => {
    const card = createCard(title, image)
    listContainer.prepend(card);
};


modalWindowEdit.addEventListener('submit', handleEditFormSubmit);


formCardsAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addCard(placeInput.value, linkInput.value)
    closePopup(modalWindowCards);
    formCardsAdd.reset();
});

renderInitialCards(initialCards);

const formEditProfileValidator = new FormValidator(config, formElement);
formEditProfileValidator.enableValidation();

const formAddNewCardValidator = new FormValidator(config, formCardsAdd);
formAddNewCardValidator.enableValidation();

export { cardImage, cardCaption, modalWindowImage };