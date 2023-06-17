import React from "react";

function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card)
      }
    return (
        <div className="element">
            <button className="element__trash" type="button"></button>
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
            <div className="element__group">
                <h2 className="element__group-subtitle">{props.card.name}</h2>
                <div className="elements__like-wrapper">
                    <button className="element__group-like" type="button"></button>
                    <span className="elements__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card