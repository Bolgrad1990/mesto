"use strict";
const aboutProjektLink = document.querySelector('.profile__button-popup');
const formWindow = document.querySelector('.popup');
const formClose = formWindow.querySelector('.popup__close');
const myForm = document.querySelector('.form');
const nameInputForm = document.querySelector('[full-name]');
const aboutMeInput = document.querySelector('[about-me]');
const nameFull = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__subtitle');

/*function toggleFormWindow() {
    formWindow.classList.toggle('popup_is-opened');
}
aboutProjektLink.addEventListener('click', toggleFormWindow);
formClose.addEventListener('click', toggleFormWindow);

function onOverLayClick(event) {
    if (event.target === event.currentTarget) {
        toggleFormWindow();
    }
}
formWindow.addEventListener('click', onOverLayClick);*/

aboutProjektLink.addEventListener('click', function() {
    formWindow.classList.add('popup_is-opened');
    nameInputForm.value = nameFull.textContent;
    aboutMeInput.value = aboutMe.textContent;
})

function closeModalWindow() {
    formWindow.classList.remove('popup_is-opened');
}
/*formWindow.addEventListener('click', onOverLayClick);*/

function onSubmit(e) {
    e.preventDefault();
    nameFull.value = nameInputForm.textContent;
    aboutMe.value = aboutMeInput.textContent;
    closeModalWindow();
};
myForm.addEventListener('submit', onSubmit);
formClose.addEventListener('click', closeModalWindow);