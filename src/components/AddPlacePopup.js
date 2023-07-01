import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('')
    const [link, setLink] = React.useState('')

    function handleNameChange(evt) {
        setName(evt.target.value)
    }
    
    function handleLinkChange(evt) {
        setLink(evt.target.value)
    }
    
    function handleSubmit(evt) {
        evt.preventDefault()
        props.onAddPlace({
          name: name,
          link: link,
        })
    }

    return (
    <PopupWithForm name='card-add' title='Новое место' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <input name="name" type="text" className="popup__input popup__input_place_name popup__input_type_error" id="placeName-input" placeholder="Название" minLength="2" maxLength="30" required onChange={handleNameChange} />
        <span id="placeName-input-error" className="popup__input-error"></span>
        <input name="link" type="url" className="popup__input popup__input_place_url popup__input_type_error" id="placeUrl-input" placeholder="Ссылка на картинку" required onChange={handleLinkChange} />
        <span id="placeUrl-input-error" className="popup__input-error"></span>
    </PopupWithForm>

    );
}
export default AddPlacePopup
