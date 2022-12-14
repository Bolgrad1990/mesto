"use strict";
import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import { api } from '../components/Api.js';

api.getProfile()
    .then(res => {
        userInfo.setUserInfo(res.name, res.about)
    })


api.getInitialCards()
    .then(cardList => {
        cardList.forEach(data => {
            const card = createCard({
                name: data.name,
                link: data.link,
                likes: data.likes
            })
        })
        cardsSection.setItem()
    })









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
import { data } from 'autoprefixer';



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

        api.getEditProfile(data)
            .then(res => {
                userInfo.setUserInfo(data);
            })

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
        },
        handleDeleteClick: () => {
            console.log('click button');
            confirmPopup.open()
        }
    }, '.template');

    const cardElement = card.createCard();
    return cardElement;
}

const cardsSection = new Section({
    items: [],
    renderer: (item) => {
        cardsSection.setItem(createCard(item));
    },
}, '.list');

cardsSection.renderItems();

const addImagePopup = new PopupWithForm({
    popupSelector: '.popup_type_cards',

    handleSabmitProfileForm: (data) => {
        api.addNewCard()
            .then(data => {
                cardsSection.setItem(createCard(data))
            })

        addImagePopup.close();


    }

})
addImagePopup.setEventListeners();

const confirmPopup = new PopupWithForm({
    popupSelector: '.popup_type_delete-confirm',
    /* handleSabmitProfileForm: (data) => {
         api.addNewCard()
             .then(data => {
                 cardsSection.setItem(createCard(data))
             })

         addImagePopup.close();

     }*/
    handleSabmitProfileForm: () => {
        console.log('delete!!')
    }

})
confirmPopup.setEventListeners();





// слушатель кнопки открытия попапа добавления новой карточки
cardsAddBtn.addEventListener('click', () => {
    formAddNewCardValidator.restartValidation();
    addImagePopup.open();
});

const formEditProfileValidator = new FormValidator(config, formElement);
formEditProfileValidator.enableValidation();

const formAddNewCardValidator = new FormValidator(config, formCardsAdd);
formAddNewCardValidator.enableValidation();