import React from "react";
import Header from "./Header.js"
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js"

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState()


  function onCardClick(card) {
    setSelectedCard(card)
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard()
  }
  return (
    <>
    <Header />

    <Main 
    onEditAvatar={handleEditAvatarClick} 
    onEditProfile={handleEditProfileClick} 
    onAddPlace={handleAddPlaceClick}
    onCardClick={onCardClick} 
    />

    <Footer />

    <PopupWithForm name="open-edit" title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <input id="name-input" type="text" placeholder="Имя" className="popup__input" name="name" minLength="2" maxLength="40"  required />
      <span id="name-input-error" className="popup__input-error"></span>
      <input id="info-input" type="text" placeholder="О себе" className="popup__input" name="info" minLength="2" maxLength="200"  required />
      <span id="info-input-error" className="popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm name='card-add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
    <input name="name" type="text" className="popup__input popup__input_place_name popup__input_type_error" id="placeName-input" placeholder="Название" minLength="2" maxLength="30" required />
    <span id="placeName-input-error" className="popup__input-error"></span>
    <input name="link" type="url" className="popup__input popup__input_place_url popup__input_type_error" id="placeUrl-input" placeholder="Ссылка на картинку" required />
    <span id="placeUrl-input-error" className="popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm name="avatar" title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
    <input name="link" type="url" className="popup__input popup__input_place_url popup__input_type_error" id="placeAvatar-input" placeholder="Ссылка на картинку" required />
    <span id="placeAvatar-input-error" className="popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm name='config-delete' title='Вы уверены?'/>

    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

    <template className="template-cards">
        <div className="element">
            <button className="element__trash" type="button"></button>
            <img className="element__image" src="#" alt="картинка" />
            <div className="element__group">
                <h2 className="element__group-subtitle"></h2>
                <div className="elements__like-wrapper">
                    <button className="element__group-like" type="button"></button>
                    <span className="elements__like-count"></span>
                </div>
            </div>
        </div>
    </template>
    </>
    
  );
}

export default App;
