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