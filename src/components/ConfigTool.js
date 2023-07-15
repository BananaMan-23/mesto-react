import PopupWithForm from "./PopupWithForm"
export default function ConfigTool({ isOpen, onClose, title, imgPath, name }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={name}
      title={title}
      imgPath={imgPath}
    >
    </PopupWithForm>
  )
}
