export const aboutProjektLink = document.querySelector('.profile__button-popup');
export const cardsAddBtn = document.querySelector('.profile__button-add');
export const formElement = document.querySelector('[name="editForm"]');
export const formCardsAdd = document.querySelector('[name="cardsForm"]');
export const nameInputForm = document.querySelector('.form__input_type_name');
export const aboutMeInput = document.querySelector('.form__input_type_job');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');

export const popupEditAvatar = document.querySelector('.popup_type_avatar');
export const buttonAvatar = document.querySelector('.profile__button-avatar');
export const formAvatar = popupEditAvatar.querySelector('[name="avatarForm"]');

export const placeInput = formCardsAdd.querySelector('[name="place"]');
export const linkInput = formCardsAdd.querySelector('[name="link"]');

export const popups = document.querySelectorAll('.popup');
export const modalWindowEdit = document.querySelector('.popup_type_edit');
export const modalWindowCards = document.querySelector('.popup_type_cards');

export const listContainer = document.querySelector('.list');

export const modalWindowImage = document.querySelector('.popup_type_image');
export const cardImage = document.querySelector('.popup__image');
export const cardCaption = document.querySelector('.popup__caption');

export const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
};