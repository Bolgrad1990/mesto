//"use strict";


import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import { api } from '../components/Api.js';

let userId

/*const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
    headers: {
        authorization: '8002b1c6-936e-448e-b4b8-bec58afe72bf',
        'Content-Type': 'application/json'
    }
})*/


Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([me, cards]) => {
        userId = me._id;
        userInfo.setUserInfo(me);
        cardsSection.renderItems(cards);
    })
    .catch((err) => console.log(err))

api.getProfile()
    .then(data => {
        userInfo.setUserInfo(data.userName, data.aboutMe, data.avatar)
        userId = res.id;
    })


api.getInitialCards()
    .then(cardList => {
        cardList.forEach(data => {
            const card = createCard({
                name: data.name,
                link: data.link,
                likes: data.likes,
                id: data.id,
                userId: userId,
                ownerId: data.owner._id
            })
            cardsSection.setItem(card)
        })

    })


import {
    initialCards,
    aboutProjektLink,
    cardsAddBtn,
    formElement, //--------!
    formCardsAdd, // ------!
    nameInputForm, // ----!
    aboutMeInput, // ------!
    ///////////////////////////////////
    //buttonAvatar,
    //popupEditAvatar,
    ///////////////////////////
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
    aboutMeSelector: '.profile__subtitle',
    avatarSelector: '.profile__img'
})

//создание попапа профиля 
const openProfilePopup = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleSabmitProfileForm: (data) => {

        api.getEditProfile(data)
            .then(data => {
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

        handleDeleteClick: (id) => {

            confirmPopup.open()
            confirmPopup.changeSabmitHandler(() => {
                confirmPopup.close();

                api.deleteCard(id)
                    .then(res => {
                        card.handleDelCard();

                    })
            })
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
        //console.log(data)
        api.addNewCard(data)
            .then(data => {
                cardsSection.setItem(createCard(data))
            })

        addImagePopup.close();


    }

})
addImagePopup.setEventListeners();

const confirmPopup = new PopupWithForm({ popupSelector: '.popup_type_delete-confirm' })

confirmPopup.setEventListeners();





const editAvatarPopup = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (data) => {
        editAvatarPopup.loading(true);

        api.updateProfile(data)
            .then((data) => {
                console.log(data);

                userInfo.setUserInfo(data);
                editAvatarPopup.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                editAvatarPopup.loading(false);
            });
    }
})
editAvatarPopup.setEventListeners();

// слушатель кнопки открытия попапа добавления новой карточки
cardsAddBtn.addEventListener('click', () => {
    formAddNewCardValidator.restartValidation();
    addImagePopup.open();
});

const formEditProfileValidator = new FormValidator(config, formElement);
formEditProfileValidator.enableValidation();

const formAddNewCardValidator = new FormValidator(config, formCardsAdd);
formAddNewCardValidator.enableValidation();