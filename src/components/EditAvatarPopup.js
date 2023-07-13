import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose }) {
  const avatarRef = React.useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <Form
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      // onClose={props.onClose}
      onSubmit={handleSubmit}
      isModal={true}
      buttonText="Сохранить"
    >
      <input
        name="link"
        type="url"
        className="popup__input popup__input_place_url"
        id="placeAvatar-input"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span id="placeAvatar-input-error" className="popup__input-error"></span>
      <button
        type="button"
        className="popup__close-button"
        onClick={onClose}
      ></button>
    </Form>
  );
}
export default EditAvatarPopup;
