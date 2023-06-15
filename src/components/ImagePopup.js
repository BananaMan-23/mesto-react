function ImagePopup() {
    return (
        <div class="popup popup_zoom-image">
            <div class="popup__sizing-container popup__overlay">
                <div class="popup__figure">
                <img src="#" class="popup__image" alt="#"/>
                <figcaption class="popup__caption"></figcaption>
                </div>
                <button type="button" class="popup__close"></button>
            </div>
        </div>
    )
}

export default ImagePopup