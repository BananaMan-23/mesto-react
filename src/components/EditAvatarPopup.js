import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef('')

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onUpdateAvatar({
          avatar: avatarRef.current.value
        })
        avatarRef.current.value = ''
    }

    return (
    <PopupWithForm name="avatar" title='Обновить аватар' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <input name="link" type="url" className="popup__input popup__input_place_url popup__input_type_error" id="placeAvatar-input" placeholder="Ссылка на картинку" required ref={avatarRef} />
        <span id="placeAvatar-input-error" className="popup__input-error"></span>
    </PopupWithForm>
    );
}
export default EditAvatarPopup;