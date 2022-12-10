"use strict";
import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';


import {
    initialCards,
    aboutProjektLink,
    cardsAddBtn,
    formElement, //--------!
    formCardsAdd, // ------!
    nameInputForm, // ----!
    aboutMeInput, // ------!
    profileTitle,
    profileSubtitle,
    placeInput,
    linkInput,
    popups,
    modalWindowEdit,
    modalWindowCards,
    listContainer,
    modalWindowImage,
    cardImage,
    cardCaption,
    config
} from '../utils/constants.js'



const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

function initProfileFormValues({ userName, aboutMe }) {
    nameInputForm.value = userName;
    aboutMeInput.value = aboutMe;
}

const userInfo = new UserInfo({
    userNameSelector: '.profile__title',
    aboutMeSelector: '.profile__subtitle'
})

//создание попапа профиля 
const openProfilePopup = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleSabmitProfileForm: (data) => {
        userInfo.setUserInfo(data);
        openProfilePopup.close();
    }
});
openProfilePopup.setEventListeners();

//Открытие попапа профиля с внесением  информации 
aboutProjektLink.addEventListener('click', () => {
    const info = userInfo.getUserInfo();
    initProfileFormValues({

        userName: info.userName,
        aboutMe: info.aboutMe
    });


    formEditProfileValidator.restartValidation();
    openProfilePopup.open();
});

//создание новой карточки
const createCard = (data) => {
    const card = new Card({
        data: data,
        handleClickCard: (name, link) => {
            popupWithImage.open({ name, link });
        }
    }, '.template');

    const cardElement = card.createCard();
    return cardElement;
}

const cardsSection = new Section({
    items: initialCards,
    renderer: (item) => {
        cardsSection.setItem(createCard(item));
    },
}, '.list');

cardsSection.renderItems();

const addImagePopup = new PopupWithForm({
    popupSelector: '.popup_type_cards',

    handleSabmitProfileForm: (data) => {
        console.log(data)
        cardsSection.setItem(createCard(data))
        addImagePopup.close();

    }
})
addImagePopup.setEventListeners();

// слушатель кнопки открытия попапа добавления новой карточки
cardsAddBtn.addEventListener('click', () => {
    formAddNewCardValidator.restartValidation();
    addImagePopup.open();
});

const formEditProfileValidator = new FormValidator(config, formElement);
formEditProfileValidator.enableValidation();

const formAddNewCardValidator = new FormValidator(config, formCardsAdd);
formAddNewCardValidator.enableValidation();