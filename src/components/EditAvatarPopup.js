import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef(null)

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onUpdateAvatar({
          avatar: avatarRef.current.value
        })
    }

    useEffect(() => {
        avatarRef.current.value = ''
    }, [props.isOpen])

    return (
    <PopupWithForm name="avatar" title='Обновить аватар' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText='Сохранить'>
        <input name="link" type="url" className="popup__input popup__input_place_url" id="placeAvatar-input" placeholder="Ссылка на картинку" required ref={avatarRef} />
        <span id="placeAvatar-input-error" className="popup__input-error"></span>
    </PopupWithForm>
    );
}
export default EditAvatarPopup;