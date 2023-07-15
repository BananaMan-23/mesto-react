import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Register.js";
import Login from "./Login.js";
import * as auth from "../utils/auth";
import ProtectedRouteElement from "./ProtectedRoute.js";
import ConfigTool from "./ConfigTool.js";
import Ok from "../images/Ok.svg";
import NotOk from "../images/NotOk.svg";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useNavigate();
  const [email, setEmail] = React.useState("");
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [message, setMessage] = React.useState({ imgPath: "", text: "" });

  React.useEffect(() => {
    tokenCheck();
  });

  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth.getContent(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          setEmail(res.data.email);
        }
      });
      history.push("/");
    }
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function onCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
    setIsInfoTooltipOpen(false);
  }

  function onUpdateUser(userData) {
    api
      .setUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function onUpdateAvatar(userData) {
    api
      .setUserAvatar(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        // setCards(cards.filter((item) => item !== card))
        setCards((prevState) => prevState.filter((item) => item !== card));
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(cardData) {
    api
      .addCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleRegistration(password, email) {
    auth
      .register(password, email)
      .then((result) => {
        setEmail(result.data.email);
        setMessage({ imgPath: Ok, text: "Вы успешно зарегистрировались!" });
        setIsInfoTooltipOpen(true);
      })
      .catch(() =>
        setMessage({
          imgPath: NotOk,
          text: "Что-то пошло не так! Попробуйте ещё раз.",
        })
      );
    setIsInfoTooltipOpen(true);
  }

  function handleAuth(password, email) {
    auth
      .authorize(password, email)
      .then((token) => {
        auth.getContent(token).then((res) => {
          setEmail(res.data.email);
          setLoggedIn(true);
        });
      })
      .catch((err) => console.log(err));
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/sign-up");
  }

  React.useEffect(() => {
    api
      .getUserCard()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser || ""}>
      <Header loggedIn={loggedIn} email={email} onSignOut={onSignOut} />

      {/* <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={onCardClick}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        cards={cards}
      /> */}

      <Routes>
        <Route path="/" element={
          <ProtectedRouteElement
          loggedIn={loggedIn}
          component={Main}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={onCardClick}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
          cards={cards}
        />
        }>
          
        </Route>
        <Route
          path="/sign-in"
          element={
            <Register
              isOpen={isEditProfilePopupOpen}
              onRegister={handleRegistration}
            />
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <Login isOpen={isEditProfilePopupOpen} onAuth={handleAuth} />
          }
        ></Route>
      </Routes>

      <Footer />

      <ConfigTool
        name="tooltip"
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        title={message.text}
        imgPath={message.imgPath}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={onUpdateUser}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={onUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <PopupWithForm name="config-delete" title="Вы уверены?" buttonText="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
