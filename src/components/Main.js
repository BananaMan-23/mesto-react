import {api} from "../utils/Api.js"
import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, handleCardLike, handleCardDelete, cards}) {
    const currentUser = React.useContext(CurrentUserContext)

    return (
    <main className="main">
        <section className="profile">
            <div className="profile__avatar-wrapper">
                <img src={currentUser.avatar} alt="Изображение профиля" className="profile__avatar"/>
                <button type="button" className="profile__avatar-edit-button" onClick={onEditAvatar}></button>
            </div>
            <div className="profile__container">
                <div className="profile__container-info">
                    <h1 className="profile__container-title">{currentUser.name}</h1>
                    <button className="profile__container-edit" type="button" onClick={onEditProfile}></button>
                </div>
                <p className="profile__container-subtitle">{currentUser.about}</p> 
            </div>
            <button className="profile__container-add" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="elements">
        {
            cards.map((card) => <Card key={card._id} 
            card={card} 
            onCardClick={onCardClick} 
            onCardLike={handleCardLike} 
            onCardDelete={handleCardDelete} />)
        }
        </section>
    </main>
    )
}

export default Main