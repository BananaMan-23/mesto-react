import React from "react";
// import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Form from './Form'

function EditProfilePopup({ isOpen, onUpdateUser, onClose }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <Form
      name="open-edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      isModal={true}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        id="name-input"
        type="text"
        placeholder="Имя"
        className="popup__input"
        name="name"
        minLength="2"
        maxLength="40"
        required
        onChange={handleNameChange}
        value={name || ""}
      />
      <span id="name-input-error" className="popup__input-error"></span>
      <input
        id="info-input"
        type="text"
        placeholder="О себе"
        className="popup__input"
        name="info"
        minLength="2"
        maxLength="200"
        required
        value={description || ""}
        onChange={handleDescriptionChange}
      />
      <span id="info-input-error" className="popup__input-error"></span>
      <button
        type="button"
        className="popup__close"
        onClick={onClose}
      >
      </button> 
    </Form>
  );
}

export default EditProfilePopup;
