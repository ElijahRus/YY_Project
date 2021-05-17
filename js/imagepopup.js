class ImagePopUp {

    constructor(container) {
        this.container = container;
    }

    createImagePopUp(background) {
        const popUpContainer = document.createElement('div');
        popUpContainer.classList.add('popup');
        popUpContainer.classList.add('popup_is-opened');        
        const popUpContent = document.createElement('div');
        popUpContent.classList.add('popup__content');
        popUpContent.classList.add('popup__content_type_image');
        const popUpClose = document.createElement('img');
        popUpClose.classList.add('popup__close');
        popUpClose.setAttribute('src', './images/close.svg');      
        const popUpImage = document.createElement('div');
        popUpImage.classList.add('popup__image');
        popUpImage.setAttribute('style', `background-image: ${background}`);        
        popUpContainer.appendChild(popUpContent);
        popUpContent.appendChild(popUpClose);
        popUpContent.appendChild(popUpImage);
        this.popUpWindow = popUpContainer;
        return popUpContainer;
    }

    open() {
        this.container.appendChild(this.popUpWindow);
    }

    close(event) {
        event.target.parentNode.parentNode.remove();
    }

    setEventListeners() {
        this
            .container
            .querySelector('.popup__close')
            .addEventListener('click', this.close);
    } 
}