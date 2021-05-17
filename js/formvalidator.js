class FormValidator {
    constructor(form) {
        this.form = form;
    }

    checkInputValidity(event) {
        const input = event.target;
        const error = event.target.nextSibling;
        if(event.target.type === 'text') {
            if( input.value.length === 0 ) {
                error.textContent = "Это обязательное поле";
            }
            else if ( input.value.length === 1 || input.value.length > 30 ) {
                error.textContent = "Должно быть от 2 до 30 символов";
            }
            else {
                error.textContent = "";
            }
        }        
        
        else if(event.target.type === 'url') {
            if( input.value.length === 0 ) {
                error.textContent = "Это обязательное поле";
            }
            else if( !input.validity.valid ) {
                error.textContent = "Здесь должна быть ссылка";
            }
            else {
                error.textContent = "";
            }
        }
    }


    setEventListeners() {
        this
            .form
            .querySelectorAll('.popup__input')[0]
            .addEventListener('input', this.checkInputValidity);
        this
            .form
            .querySelectorAll('.popup__input')[1]
            .addEventListener('input', this.checkInputValidity);
        this
            .form
            .querySelectorAll('.popup__input')[0]
            .addEventListener('input', this.setSubmitButtonState);
        this
            .form
            .querySelectorAll('.popup__input')[1]
            .addEventListener('input', this.setSubmitButtonState);
    }

    setSubmitButtonState(event) {
        const errorOne = this.form.querySelectorAll('.popup__error')[0];
        const errorTwo = this.form.querySelectorAll('.popup__error')[1];
        const button = this.form.querySelector('.popup__button');
        if( errorOne.innerHTML === "" &&  errorTwo.innerHTML === "") {
            button.removeAttribute('disabled');
            button.classList.remove('popup__button_disabled');
        }else {
            button.setAttribute('disabled', true);
            button.classList.add('popup__button_disabled');
        }
        
    }
}