"use strict";
// включение валидации вызовом enableValidation
// все настройки передаются при вызове


/*const formSelector = document.querySelector('.form');
const inputSelector = formSelector.querySelector('.form__input');
const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);*/

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__error_visible');
};
const hideInputError = (formSelector, inputElement) => {
    const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__error_visible');
    errorElement.textContent = '';
};


const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};



const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement, config);
        });
    });
};


function disabledButton(formElement, config) {
    const buttonElement = formElement.querySelector(config.submitButtonSelector)
    buttonElement.classList.add(config.inactiveButtonClass)
    buttonElement.setAttribute('disabled', 'disabled');
}


const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            disabledButton(formElement, config);
        });
        setEventListeners(formElement, config);
    });
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass)
        buttonElement.setAttribute('disabled', 'disabled');
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
});






/*inputSelector.addEventListener('input', function(evt) {
    checkInputValidity();
});*/


/*const showInputError = (formElement, inputSelector, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputSelector.id}-error`); // *21.1.1 Находим элемент в группе полей с классом содержащим идентификатор поля и суфикс -error (связанный с полем ввода span)
    inputSelector.classList.add('form__input_type_error'); // *21.1.2 Для поля ввода с ошибкой добавляем класс form__input_type_error в котором мы определяем его оформление в случае ошибки (например цвет границы)
    errorElement.textContent = errorMessage; // *21.1.3 Устанавливаем текстовое содержимое связанного спана текстом ошибки из параметра errorMessage 
    errorElement.classList.add('form__input-error_active'); // *21.1.4 Для связанного спана добавляем класс в стилях которого определена его видимость (без него он скрыт) 
};

const hideInputError = (formSelector, inputSelector) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`); // *21.2.1 Находим элемент в группе полей с классом содержащим идентификатор поля и суфикс -error (связанный с полем ввода span)
    inputSelector.classList.remove('form__input_type_error'); // *21.2.2 Для поля ввода с ошибкой УДАЛЯЕМ класс form__input_type_error в котором мы определяем его оформление в случае ошибки (например цвет границы). Без него оформление поле ввода будет как задано в классе элемента.
    errorElement.classList.remove('form__input-error_active'); // *21.1.4 Для связанного спана Удаляем класс в стилях которого определена его видимость. Скрываем элемент.
    errorElement.textContent = ''; // *21.1.4 Обнуляем текстовое содержимое спана. Ошибки нет.
};

const checkInputValidity = (formSelector, inputSelector) => {
    if (!inputSelector.validity.valid) { // *21 Анализируем прошло ли проверку валидации значение содержащееся в поле ввода inputElement
        showInputError(formSelector, inputSelector, inputSelector.validationMessage); // *21.1 Если НЕТ, то вызывается функция showInputError. В функцию передаем значение сообщения об ошибке сгенерированного браузером (свойство validationMessage поля ввода inputElement)
    } else {
        hideInputError(formSelector, inputSelector); // *21.2 Если ДА, то вызывается функция hideInputError
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some(input => !input.validity.valid) //14. Используем для перебора значений массива полей ввода функцию some(). Для каждого поля из массива проверяем корректно ли его содержимое. Если хотя бы одно из полей неккоретно, то some вернет Истину. Иначе Ложь. Это же значение мы вернем из функции. 
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) { // 13. Вызываем функцию hasInvalidInput с передачей в нее массива полей ввода группы полей. Анализируем возвращенное функцией значение
        buttonElement.classList.add('button_inactive'); // 15.1 Если функция hasInvalidInput вернула Истина, то есть есть некорректные поля, то добавлять класс который оформляет кнопку в состояние неактивной. Примечение: В проектной работе дополнительно нужно добавить атрибут disabled
    } else {
        buttonElement.classList.remove('button_inactive'); // 15.2 Если функция hasInvalidInput вернула Ложь, то есть все поля заполнены корректно, то удалить класс который оформляет кнопку в состояние неактивной. Примечение: В проектной работе дополнительно нужно удалить атрибут disabled
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input')); // 9. Получаем коллекцию всех элементов группы полей с классом form__input. Преобразуем его в массив(иначе нам будет недоступен метод some())
    const buttonElement = formElement.querySelector('.form__submit'); // 10. Находим кнопку в группе полей с классом form__submit.
    toggleButtonState(inputList, buttonElement); // 11. Вызываем функцию toggleButtonState с передачей в нее массива найденных полей ввода и кнопки. Нужно для установки недоступного состояния кнопки при загрузке страницы.
    inputList.forEach((inputElement) => { // 16. Обходим массив найденных полей ввода. Для каждого поля ввода (inputElement) выполняем код в фигурных скобках
        inputElement.addEventListener('input', function() { // 17. Подключаем обработчик события input для поля ввода.
            checkInputValidity(formElement, inputElement); // *20. Тут начинаю новую нумерацию, так как код будет выполнен только когда возникнет событие input. Вызывается функция checkInputValidity с передачей в нее группы полей и поля ввода на котором возникло событие input.
            toggleButtonState(inputList, buttonElement); // *21. Вызываем функцию toggleButtonState. Будут выполненны пп 13-15
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form')); // 2. Получаем коллекцию всех элементов документа с классом form. Преобразуем его в массив 
    formList.forEach((formElement) => { // 3. Перебираем все найденные формы. Для каждой формы (formElement) выполняем блок кода в фигурных скобках.
        formElement.addEventListener('submit', function(evt) { // 4. Для каждой формы (formElement) подключаем обработчик отправки данных формы. Примечание: В проектной работе у нас уже есть эти обработчики поэтому второй раз подключать не нужно.
            evt.preventDefault(); // *5. При отправке данных формы отключить стандартные действия браузера.
        });

        const fieldsetList = Array.from(formElement.querySelectorAll('.form__set')); //6. Находим коллекцию всех элементов документа с классом form__set. Преобразуем его в массив. В проектной работе этого не нужно. Можем обходить массив найденных форм.
        fieldsetList.forEach((fieldSet) => { //7. Обходим массив найденных групп полей и для каждого 
            setEventListeners(fieldSet); //8. Вызываем функцию setEventListeners передав в нее текущую группу полей.
        });
    });
};
enableValidation();*/