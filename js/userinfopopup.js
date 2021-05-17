class UserInfoPopup {

    constructor(parameters) {
        this.parameters = parameters;
    }

    createUserInfoPopup() {
        const popUpContainer = document.createElement('div');
        const popUpContent = document.createElement('div');
        const popUpClose = document.createElement('img');
        const popUpTitle = document.createElement('h3');
        const popupForm = document.createElement('form');
        const inputOne = document.createElement('input');
        const inputOneError = document.createElement('span');
        const inputTwo = document.createElement('input');
        const inputTwoError = document.createElement('span');
        const popupButton = document.createElement('button');
        const parentContainer = document.querySelector('.root');


        popUpContainer.classList.add('popup', 'popup_is-opened');        
        popUpContent.classList.add('popup__content');
        popUpClose.classList.add('popup__close');
        popUpClose.setAttribute('src', './images/close.svg');
        popUpTitle.classList.add('popup__title');
        popUpTitle.innerHTML = 'Редактировать профиль';
        popupForm.classList.add('popup__form');
        popupForm.setAttribute('name', 'edit');
        inputOne.classList.add('popup__input');
        inputOne.setAttribute('type', 'text');
        inputOne.setAttribute('name', 'name');
        inputOne.setAttribute('placeholder', 'Имя');
        inputOne.setAttribute('value', this.parameters['userName']);
        inputOneError.classList.add('popup__error');
        inputOneError.textContent = '';
        inputTwo.classList.add('popup__input');
        inputTwo.setAttribute('type','text');
        inputTwo.setAttribute('name','job');
        inputTwo.setAttribute('placeholder', 'О себе');
        inputTwo.setAttribute('value', this.parameters['userJob']);
        inputTwoError.classList.add('popup__error');
        inputTwoError.textContent = '';
        popupButton.classList.add('button', 'popup__button', 'popup__button_type_edit');
        popupButton.innerHTML = 'Сохранить';

        
        popUpContainer.appendChild(popUpContent);
        popUpContent.appendChild(popUpClose);
        popUpContent.appendChild(popUpTitle);
        popUpContent.appendChild(popupForm);
        popupForm.appendChild(inputOne);
        popupForm.appendChild(inputOneError);
        popupForm.appendChild(inputTwo);
        popupForm.appendChild(inputTwoError);
        popupForm.appendChild(popupButton);

        this.popUpWindow = popUpContainer;        
        this.parentContainer = parentContainer;
        this.popupForm = popupForm;
        return popupForm;
        
    }

    submit(event) {
        event.preventDefault();
        userInfo.setUserInfo(event.target.elements[0].value, event.target.elements[1].value);
        userInfo.updateUserInfo();
        event.target.parentNode.parentNode.remove();        
    }


    open() {      
        this.parentContainer.appendChild(this.popUpWindow);
    }

    close(event) {
        event.target.parentNode.parentNode.remove();
    }

    setEventListeners() {
        this
            .popUpWindow
            .querySelector('.popup__close')
            .addEventListener('click', this.close);
        
        this
            .popupForm
            .addEventListener('submit', this.submit);
    } 
}