const placesContainer = document.querySelector('.places-list');
const newPlaceButton = document.querySelector('.user-info__button');
const popUpConrainer = document.querySelector('.popup');
const userEditButton = document.querySelector('.user-info__edit-button');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');
const initialCardsArray = [];
const userInfo = new UserInfo();
userInfo.setUserInfo(userName.textContent, userJob.textContent);
userInfo.updateUserInfo();


//Creatings Cards and filling up initialCarda Array
initialCards.forEach(function(place) {
    const myCard = new Card(place['name'], place['link']);
    const cardContainer = myCard.create();
    myCard.setEventListeners(); 
    initialCardsArray.push(cardContainer);   
});


const myCardList = new CardList(placesContainer, initialCardsArray);
myCardList.render();

placesContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('place-card__image')) {
        const imagePopUpWindow = new ImagePopUp(placesContainer);
        imagePopUpWindow.createImagePopUp(event.target.style['background-image']);
        imagePopUpWindow.open();
        imagePopUpWindow.setEventListeners();
    }
});

newPlaceButton.addEventListener('click', function(){
    const newPlaceParameters = {
        
    };
    const newPlaceForm = new PopupNewPlace(newPlaceParameters);
    const myForm = newPlaceForm.createNewPlacePopUp();
    newPlaceForm.open();
    newPlaceForm.setEventListeners();
    const newPlaceValidator = new FormValidator(myForm);
    newPlaceValidator.setEventListeners();
});





userEditButton.addEventListener('click', function() {
    const editUserParameters = {
        userName: userName.textContent,
        userJob: userJob.textContent
    };

    const editUserForm = new UserInfoPopup(editUserParameters);
    const formcontainer = editUserForm.createUserInfoPopup();
    editUserForm.open();
    editUserForm.setEventListeners();
    const myValidator = new FormValidator(formcontainer);
    myValidator.setEventListeners();
});
