function ImagePopup(props) {
  
    return (
      <div className={`popup popup_zoom-image ${props.card ? 'popup_opened' : ''}`}>
        <div className="popup__sizing-container popup__overlay">
          <figure className="popup__figure">
            <img
              src={props.card ? props.card.link : '#'}
              className="popup__image"
              alt={props.card ? props.card.name : ''}
            />
            <figcaption className="popup__caption">
                {props.card ? props.card.name : ''}
            </figcaption>
          </figure>
          <button type="button" className="popup__close" onClick={props.onClose}></button>
        </div>
      </div>
    )
}
  

export default ImagePopup