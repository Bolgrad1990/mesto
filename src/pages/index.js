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

function addInfoFormProfile({ userName, aboutMe }) {
    nameInputForm.value = userName;
    aboutMeInput.value = aboutMe;
}

const userInfo = new UserInfo({
    userName: '.profile__title',
    aboutMe: '.profile__subtitle'
})

//создание попапа профиля 
const showProfilePopup = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleSabmitProfileForm: (data) => {
        userInfo.setUserInfo(data);
        showProfilePopup.close();
    }
});
showProfilePopup.setEventListeners();

//Открытие попапа профиля с внесением  информации 
aboutProjektLink.addEventListener('click', () => {
    const info = userInfo.getUserInfo();
    addInfoFormProfile({

        userName: info.userName,
        aboutMe: info.aboutMe
    });


    formEditProfileValidator.restartValidation();
    showProfilePopup.open();
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

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.setItem(createCard(item));
    },
}, '.list');

cardList.renderItems();

const addImagePopup = new PopupWithForm({
    popupSelector: '.popup_type_cards',

    handleSabmitProfileForm: (data) => {
        cardList.setItem(createCard(data))
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



//const popupFormCard = new PopupWithForm();
//const popupFormProgect = new PopupWithForm();




/*popups.forEach((popup) => {
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
//-------------------------------------------------/*


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
//--------------------------------------------------------


function handleSubmitProfileForm(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInputForm.value;
    profileSubtitle.textContent = aboutMeInput.value;
    closePopup(modalWindowEdit);
};

/*
function createCards(title, image) {
    const card = new Card(title, image, '.template', openPopup, closePopup);
    const cardElement = card.createCard();
    return cardElement;
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
*/

/*formElement.addEventListener('submit', handleSubmitProfileForm);

formCardsAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addCard(placeInput.value, linkInput.value);
    closePopup(modalWindowCards);
    formCardsAdd.reset();
});

renderItems(initialCards);


const formEditValidation = new FormValidator(config, formElement);
formEditValidation.enableValidation();

const newCardValidation = new FormValidator(config, formCardsAdd);
newCardValidation.enableValidation();

//export { modalWindowImage, cardImage, cardCaption };*/