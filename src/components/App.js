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
  }
  return (
    <>
    <Header />

    <Main onEditAvatar={handleEditAvatarClick} 
    onEditProfile={handleEditProfileClick} 
    onAddPlace={handleAddPlaceClick} />

    <Footer />

    <PopupWithForm name="open-edit" title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <input id="name-input" type="text" placeholder="Имя" class="popup__input" name="name" minlength="2" maxlength="40" value="" required />
      <span id="name-input-error" class="popup__input-error"></span>
      <input id="info-input" type="text" placeholder="О себе" class="popup__input" name="info" minlength="2" maxlength="200" value="" required />
      <span id="info-input-error" class="popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm name='card-add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
    <input name="name" type="text" class="popup__input popup__input_place_name popup__input_type_error" id="placeName-input" placeholder="Название" minlength="2" maxlength="30" required />
    <span id="placeName-input-error" class="popup__input-error"></span>
    <input name="link" type="url" class="popup__input popup__input_place_url popup__input_type_error" id="placeUrl-input" placeholder="Ссылка на картинку" required />
    <span id="placeUrl-input-error" class="popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm name="avatar" title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
    <input name="link" type="url" class="popup__input popup__input_place_url popup__input_type_error" id="placeAvatar-input" placeholder="Ссылка на картинку" required />
    <span id="placeAvatar-input-error" class="popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm name='config-delete' title='Вы уверены?'/>

    <ImagePopup onClose={closeAllPopups}/>

    <template class="template-cards">
        <div class="element">
            <button class="element__trash" type="button"></button>
            <img class="element__image" src="#" alt="картинка" />
            <div class="element__group">
                <h2 class="element__group-subtitle"></h2>
                <div class="elements__like-wrapper">
                    <button class="element__group-like" type="button"></button>
                    <span class="elements__like-count"></span>
                </div>
            </div>
        </div>
    </template>
    </>
    
  );
}

export default App;
