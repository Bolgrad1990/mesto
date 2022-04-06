"use strict";
const aboutProjektLink = document.querySelector('.profile__button-popup');
const formWindow = document.querySelector('.popup');
const formClose = formWindow.querySelector('.popup__close');

function toggleFormWindow() {
    formWindow.classList.toggle('popup_is-opened');
}
aboutProjektLink.addEventListener('click', toggleFormWindow);
formClose.addEventListener('click', toggleFormWindow);

function onOverLayClick(event) {
    if (event.target === event.currentTarget) {
        toggleFormWindow();
    }
}
formWindow.addEventListener('click', onOverLayClick);

const myForm = document.querySelector('.form');
const nameInput = document.querySelector('.form__input-name');
const aboutMeInput = document.querySelector('.form__input-job');
const nameFull = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__subtitle');

function onSubmit(e) {
    e.preventDefault();
    nameInput.value = nameFull.textContent;
    aboutMeInput.value = aboutMe.textContent;
}
myForm.addEventListener('submit', onSubmit);