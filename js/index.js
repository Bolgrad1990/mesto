"use strict";
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
const formCardsAdd = document.querySelector('[name="cardsForm"]')
const nameInputForm = document.querySelector('.form__input_type_name');
const aboutMeInput = document.querySelector('.form__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const modalWindowEdit = document.querySelector('.popup_type_edit');
const modalWindowCards = document.querySelector('.popup_type_cards');
const modalWindowImage = document.querySelector('.popup_type_image');
const editCloseBtn = modalWindowEdit.querySelector('.form__close_type_edit');
const cardCloseBtn = modalWindowCards.querySelector('.form__close_type_cards');
const imageCloseBtn = modalWindowImage.querySelector('.form__close_type_image');
const listContainer = document.querySelector('.list');
const template = document.querySelector('.template');
const cardImage = document.querySelector('.popup__image');
const cardCaption = document.querySelector('.popup__caption');


function openPopup(modalWindowEdit) {
    modalWindowEdit.classList.add('popup_is-opened');
};

function closePopup(modalWindowEdit) {
    modalWindowEdit.classList.remove('popup_is-opened');
};


aboutProjektLink.addEventListener('click', function() {
    /*formWindow.classList.add('popup_is-opened');*/
    nameInputForm.value = profileTitle.textContent;
    aboutMeInput.value = profileSubtitle.textContent;
    openPopup(modalWindowEdit);
});

cardsAddBtn.addEventListener('click', () => {
    openPopup(modalWindowCards);
});

editCloseBtn.addEventListener('click', () => {
    closePopup(modalWindowEdit);
});
cardCloseBtn.addEventListener('click', () => {
    closePopup(modalWindowCards);
});
imageCloseBtn.addEventListener('click', () => {
    closePopup(modalWindowImage);
});


function onSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInputForm.value;
    profileSubtitle.textContent = aboutMeInput.value;
    closePopup(modalWindowEdit);
};


function render() {
    const html = initialCards.map(getElement);
    listContainer.append(...html);
};

function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const name = getElementTemplate.querySelector('.list__text');
    const link = getElementTemplate.querySelector('.list__img');
    const imageLikeBtn = getElementTemplate.querySelector('.list__symbol');
    const imageDelBtn = getElementTemplate.querySelector('.list__delete');


    name.textContent = item.name;
    link.src = item.link;
    link.alt = item.name;

    function removeElement(evt) {
        const element = evt.target.closest('.list__element');
        element.remove();
    }
    imageDelBtn.addEventListener('click', removeElement);
    imageLikeBtn.addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__symbol_active')
    });

    link.addEventListener('click', () => {
        cardImage.src = item.link;
        cardCaption.alt = item.name;
        cardCaption.textContent = item.name;
        openPopup(modalWindowImage);
    });

    return getElementTemplate;
};

function imageFormAddSubmitHandler(evt) {
    evt.preventDefault();
    const placeInput = formCardsAdd.querySelector('[name="place"]').value;
    const linkInput = formCardsAdd.querySelector('[name="link"]').value;
    const element = getElement({ name: placeInput, link: linkInput });
    listContainer.prepend(element);
    closePopup(modalWindowCards);
    formCardsAdd.reset();

};

formElement.addEventListener('submit', onSubmit);
formCardsAdd.addEventListener('submit', imageFormAddSubmitHandler);


render();


/*myForm.addEventListener('submit', onSubmit);
formClose.addEventListener('click', closeModalWindow);*/

/*function closeModalWindow() {
    formWindow.classList.remove('popup_is-opened');
};*/


// Находим шаблон карточки Template и получаем его содержимое
const cardTemplate = document.querySelector('#card-template').content;
// Находим блок в котором будет использован Template
const cardGrid = document.querySelector('.card-grid');