function PopupWithForm({
  name,
  title,
  isOpen,
  children,
  onSubmit,
  buttonText,
  onClose,
  imgPath,
}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__overlay">
        <form
          className={`popup__form ${
            name === "ConfigTool" ? "popup__form_type_tooltip" : ""
          }`}
          name={name}
          onSubmit={onSubmit}
        >
          {name === "ConfigTool" && (
            <img src={imgPath} alt={name} className="popup__tooltip" />
          )}
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            type="submit"
            className={`popup__button ${
              name === "ConfigTool" ? "popup__button_hidden" : ""
            }`}
          >
            {buttonText}
          </button>
        </form>
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
