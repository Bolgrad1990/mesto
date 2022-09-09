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
const formElement = document.querySelector('[name="editForm"]');
const formCardsAdd = document.querySelector('[name="cardsForm"]');
const nameInputForm = document.querySelector('.form__input_type_name');
const aboutMeInput = document.querySelector('.form__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const placeInput = formCardsAdd.querySelector('[name="place"]');
const linkInput = formCardsAdd.querySelector('[name="link"]');

const popups = document.querySelectorAll('.popup');
const modalWindowEdit = document.querySelector('.popup_type_edit');
const modalWindowCards = document.querySelector('.popup_type_cards');


const listContainer = document.querySelector('.list');
//const template = document.querySelector('.template');

const modalWindowImage = document.querySelector('.popup_type_image');
const cardImage = document.querySelector('.popup__image');
const cardCaption = document.querySelector('.popup__caption');

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
const handleEscUp = (evt) => {
    evt.preventDefault()
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_is-opened');
        closePopup(activePopup);
    };
};

function closePopup(popup) {
    document.removeEventListener('keyup', handleEscUp);
    popup.classList.remove('popup_is-opened');
};


function openPopup(modalWindowEdit) {
    document.addEventListener('keyup', handleEscUp);
    modalWindowEdit.classList.add('popup_is-opened');
};
//-------------------------------------------------


aboutProjektLink.addEventListener('click', function() {
    nameInputForm.value = profileTitle.textContent;
    aboutMeInput.value = profileSubtitle.textContent;
    formEditValidation.restartValidation();
    openPopup(modalWindowEdit);
});

cardsAddBtn.addEventListener('click', () => {
    newCardValidation.restartValidation();
    openPopup(modalWindowCards);
});
//
/*function render() {
    const html = initialCards.map(getCard);
    listContainer.append(...html);
};*/

function handleSubmitProfileForm(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInputForm.value;
    profileSubtitle.textContent = aboutMeInput.value;
    closePopup(modalWindowEdit);
};

function createCards(title, image) {
    const card = new Card(title, image, '.template', openPopup, closePopup);
    const cardElement = card.createCard();
    return cardElement
};
const renderCards = (array) => {
    array.forEach((item) => {
        addCard(item.name, item.link);
    })
}
const addCard = (title, image) => {
    const card = createCards(title, image)
    listContainer.prepend(card);
};
formElement.addEventListener('submit', handleSubmitProfileForm);


formCardsAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addCard(placeInput.value, linkInput.value);
    closePopup(modalWindowCards);
    formCardsAdd.reset();
});

renderCards(initialCards);


const formEditValidation = new FormValidator(config, formElement);
formEditValidation.enableValidation();

const newCardValidation = new FormValidator(config, formCardsAdd);
newCardValidation.enableValidation();

export { modalWindowImage, cardImage, cardCaption };

/*function getCard(data) {
const getElementTemplate = template.content.cloneNode(true);
const name = getElementTemplate.querySelector('.list__title');
const link = getElementTemplate.querySelector('.list__img');
const imageLikeBtn = getElementTemplate.querySelector('.list__symbol');
const imageDelBtn = getElementTemplate.querySelector('.list__delete');


name.textContent = data.name;
link.src = data.link;
link.alt = data.name;

function removeElement(evt) {
    const element = evt.target.closest('.list__element');
    element.remove();
}
imageDelBtn.addEventListener('click', removeElement);
imageLikeBtn.addEventListener('click', function(evt) {
    evt.target.classList.toggle('list__symbol_active')
});

link.addEventListener('click', () => {
    cardImage.src = data.link;
    cardCaption.alt = data.name;
    cardCaption.textContent = data.name;
    openPopup(modalWindowImage);
});

return getElementTemplate;
//};

/*function imageFormAddSubmitHandler(evt) {
    evt.preventDefault();
    const element = getCard({ name: placeInput.value, link: linkInput.value });
    listContainer.prepend(element);
    closePopup(modalWindowCards);
    formCardsAdd.reset();

};*/

//formElement.addEventListener('submit', formSubmitHandler);
//formCardsAdd.addEventListener('submit', imageFormAddSubmitHandler);



// Находим шаблон карточки Template и получаем его содержимое
/*const cardTemplate = document.querySelector('#card-template').content;
// Находим блок в котором будет использован Template
const cardGrid = document.querySelector('.card-grid');*/