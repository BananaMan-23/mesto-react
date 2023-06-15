import React from "react";

function Card(props) {
    return (
        <div class="element">
            <button class="element__trash" type="button"></button>
            <img class="element__image" src={props.link} alt={props.name} />
            <div class="element__group">
                <h2 class="element__group-subtitle">{props.name}</h2>
                <div class="elements__like-wrapper">
                    <button class="element__group-like" type="button"></button>
                    <span class="elements__like-count">{props.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card