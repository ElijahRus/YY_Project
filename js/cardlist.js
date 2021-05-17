class CardList {
    constructor(container, cardsArray) {
      this.container = container;
      this.cards = cardsArray;
    }

    addCard(cardElement) {
        this.cards.push(cardElement);
        this.container.appendChild(cardElement);
    }
    
    render() {
        this.cards.forEach(element => {
            this.container.appendChild(element);
        });
    }   
    
}