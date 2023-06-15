import {api} from "../utils/Api.js"
import React from "react";
import Card from "./Card.js";


function Main({onEditAvatar, onEditProfile, onAddPlace}) {
    const [userName, setUserName] = React.useState('Lycan')
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo().then((data) => {
          setUserName(data.name)
          setUserDescription(data.about)
          setUserAvatar(data.avatar)
        })
    }, [])

    React.useEffect(() => {
        api.getUserCard().then((data) => {
          setCards(data.map((item) => ({
            id: item._id,
            link: item.link,
            name: item.name,
            likes: item.likes
          })))
        })
    })

    return (
    <main className="main">
        <section className="profile">
            <div className="profile__avatar-wrapper">
                <img src={userAvatar} alt="Изображение профиля" className="profile__avatar"/>
                <button type="button" className="profile__avatar-edit-button" onClick={onEditAvatar}></button>
            </div>
            <div className="profile__container">
                <div className="profile__container-info">
                    <h1 className="profile__container-title">{userName}</h1>
                    <button className="profile__container-edit" type="button" onClick={onEditProfile}></button>
                </div>
                <p className="profile__container-subtitle">{userDescription}</p> 
            </div>
            <button className="profile__container-add" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="elements">
        {
            cards.map(({id, ...props}) => <Card key={id} {...props} />)
        }
        </section>
    </main>
    )
}

export default Main