class Card {
    constructor(name, link) {
       this.name = name;
       this.link = link; 
    }

    create() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('place-card');

        const cardImageElement = document.createElement('div');
        cardImageElement.classList.add('place-card__image');
        cardImageElement.setAttribute('style', `background-image: url(${this.link})`);
        
        const deleteCardButton = document.createElement('button');
        deleteCardButton.classList.add('place-card__delete-icon');

        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('place-card__description');

        const cardNameElement = document.createElement('h3');
        cardNameElement.classList.add('place-card__name');
        cardNameElement.textContent = this.name;

        const cardLikeButton = document.createElement('button');
        cardLikeButton.classList.add('place-card__like-icon');

        cardImageElement.appendChild(deleteCardButton);
        descriptionContainer.appendChild(cardNameElement);
        descriptionContainer.appendChild(cardLikeButton);
        cardContainer.appendChild(cardImageElement);
        cardContainer.appendChild(descriptionContainer);
        this.cardElement = cardContainer;
        return cardContainer;
    }

    like(event) {
        if (event.target.classList.contains('place-card__like-icon')) {
            event.target.classList.toggle('place-card__like-icon_liked');  
        }
    }

    remove(event) {
        if (event.target.classList.contains('place-card__delete-icon')) {
            this.parentNode.parentNode.remove();            
        }
    }

    setEventListeners() {
        this
          .cardElement
          .querySelector('.place-card__like-icon')
          .addEventListener('click', this.like);

        this
            .cardElement
            .querySelector('.place-card__delete-icon')
            .addEventListener('click', this.remove);
        
        /* this
            .cardElement
            .querySelector('.place-card__image')
            .addEventListener('click', this.showBigPicture); */
    }

    /* showBigPicture(event) {
        if( !event.target.classList.contains('place-card__delete-icon') )  {

        }        
    } */
    
}