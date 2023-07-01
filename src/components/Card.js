import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner._id === currentUser._id
    const isLiked = props.card.likes.some((item) => item._id === currentUser._id)    
    const cardDeleteButton = (`element__trash ${isOwn ? '' : 'element__trash_hidden'}`)
    const cardLikeButton = (`element__group-like ${isLiked ? 'element__group-like_active' : ''}`)

    function handleCardClick() {
        props.onCardClick(props.card)
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <div className="element">
            <button className={cardDeleteButton} type="button" onClick={handleDeleteClick}/>
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
            <div className="element__group">
                <h2 className="element__group-subtitle">{props.card.name}</h2>
                <div className="elements__like-wrapper">
                    <button className={cardLikeButton} type="button" onClick={handleLikeClick}></button>
                    <span className="elements__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card