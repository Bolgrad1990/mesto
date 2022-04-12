"use strict";
const aboutProjektLink = document.querySelector('.profile__button-popup');
const formWindow = document.querySelector('.popup');
const formClose = formWindow.querySelector('.form__close');
const myForm = document.querySelector('.form');
const nameInputForm = document.querySelector('.form__input_type_name');
const aboutMeInput = document.querySelector('.form__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

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
    nameInputForm.value = profileTitle.textContent;
    aboutMeInput.value = profileSubtitle.textContent;
})

function closeModalWindow() {
    formWindow.classList.remove('popup_is-opened');
}
/*formWindow.addEventListener('click', onOverLayClick);*/

function onSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInputForm.value;
    profileSubtitle.textContent = aboutMeInput.value;
    closeModalWindow();
};
myForm.addEventListener('submit', onSubmit);
formClose.addEventListener('click', closeModalWindow);