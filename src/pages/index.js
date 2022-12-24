import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
    aboutProjektLink,
    cardsAddBtn,
    buttonAvatar,
    formElement,
    formCardsAdd,
    formAvatar,
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

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
    headers: {
        authorization: '8002b1c6-936e-448e-b4b8-bec58afe72bf',
        'Content-Type': 'application/json'
    }
});

let userId
Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([me, cards]) => {
        userId = me._id
        userInfo.setUserInfo(me);
        cardsSection.renderItems(userId, cards);
        console.log(me)
    })
    .catch((err) => console.log(`Ошибка: ${err}`));

// Профиль
const userInfo = new UserInfo({
    userNameSelector: '.profile__title',
    aboutMeSelector: '.profile__subtitle',
    avatarSelector: '.profile__img'
})

//создание попапа профиля
const openProfilePopup = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    handleSubmitProfileForm: (formData) => {
        openProfilePopup.loading(true);
        api
            .editProfile({ name: formData.userName, about: formData.aboutMe })
            .then(userData => {
                userInfo.setUserInfo(userData);
                openProfilePopup.close();
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
            .finally(() => openProfilePopup.loading(false));
    }
});
openProfilePopup.setEventListeners();

//Открытие попапа профиля с внесением  информации
aboutProjektLink.addEventListener('click', () => {
    formEditProfileValidator.restartValidation();
    const info = userInfo.getUserInfo();
    openProfilePopup.setInputValues(info);
    openProfilePopup.open();
});

//создание попапа редактирования аватара
const editAvatarPopup = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleSubmitProfileForm: (formData) => {
        editAvatarPopup.loading(true);
        api
            .updateProfile(formData)
            .then((userData) => {
                userInfo.setUserInfo(userData);
                editAvatarPopup.close();
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
            .finally(() => editAvatarPopup.loading(false));
    }
});
editAvatarPopup.setEventListeners();

//Открытие попапа редактирования аватара
buttonAvatar.addEventListener('click', () => {
    formAvatarValidator.restartValidation();
    editAvatarPopup.open();
});

//создание попапа добавления новой карточки
const addImagePopup = new PopupWithForm({
    popupSelector: '.popup_type_cards',
    handleSubmitProfileForm: (formData) => {
        addImagePopup.loading(true)
        api
            .addNewCard(formData)
            .then(data => {
                cardsSection.setUserCard(createCard({
                    name: data.name,
                    link: data.link,
                    likes: data.likes,
                    id: data._id,
                    userId: userId,
                    ownerId: data.owner._id
                }));
                addImagePopup.close();
                console.log(data.owner._id)
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
            .finally(() => addImagePopup.loading(false));
    }
})
addImagePopup.setEventListeners();

// слушатель кнопки открытия попапа добавления новой карточки
cardsAddBtn.addEventListener('click', () => {
    formAddNewCardValidator.restartValidation();
    addImagePopup.open();
});

//создание новой карточки
const createCard = (data) => {
    const card = new Card({
        data: data,
        handleClickCard: (name, link) => {
            popupWithImage.open({ name, link });
        },
        handleDeleteClick: () => {
            confirmPopup.open()
            confirmPopup.changeSabmitHandler(() => {
                api
                    .deleteCard(data.id)
                    .then(() => {
                        card.handleDelCard();
                        confirmPopup.close();
                    })
                    .catch((err) => console.log(`Ошибка: ${err}`));
            })
        },
        handleLikeClick: (id) => {
            if ((card.isLiked())) {
                api.deleteLikeCard(id)
                    .then(res => {
                        card.setLikes(res.likes)
                        console.log(res)
                    })
                    .catch((err) => console.log(`Ошибка: ${err}`));
            } else {
                console.log('like');
                api.addLikeCard(id)
                    .then(res => {
                        card.setLikes(res.likes)
                        console.log(res)
                    })
                    .catch((err) => console.log(`Ошибка: ${err}`));
            }


        }
    }, '.template');

    const cardElement = card.createCard();
    return cardElement;
}

const cardsSection = new Section({
    // items: [],
    renderer: (item) => {
        cardsSection.setItem(createCard(item));
    },
}, '.list');

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const confirmPopup = new PopupWithForm({ popupSelector: '.popup_type_delete-confirm' })
confirmPopup.setEventListeners();

// Валидация форм
const formEditProfileValidator = new FormValidator(config, formElement);
formEditProfileValidator.enableValidation();

const formAddNewCardValidator = new FormValidator(config, formCardsAdd);
formAddNewCardValidator.enableValidation();

const formAvatarValidator = new FormValidator(config, formAvatar);
formAvatarValidator.enableValidation();