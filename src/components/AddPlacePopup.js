import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function AddPlacePopup({ isOpen, onAddPlace, onClose }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <Form
      name="card-add"
      title="Новое место"
      isOpen={isOpen}
      // onClose={props.onClose}
      onSubmit={handleSubmit}
      isModal={true}
      buttonText="Создать"
    >
      <input
        name="name"
        type="text"
        className="popup__input popup__input_place_name"
        id="placeName-input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={handleNameChange}
        value={name}
      />
      <span id="placeName-input-error" className="popup__input-error"></span>
      <input
        name="link"
        type="url"
        className="popup__input popup__input_place_url"
        id="placeUrl-input"
        placeholder="Ссылка на картинку"
        required
        onChange={handleLinkChange}
        value={link}
      />
      <span id="placeUrl-input-error" className="popup__input-error"></span>
      <button
        type="button"
        className="popup__close-button"
        onClick={onClose}
      ></button>
    </Form>
  );
}
export default AddPlacePopup;
