import avatar from "../images/avatar.png"
function Main() {
    return (
    <main className="main">
        <section className="profile">
            <div className="profile__avatar-wrapper">
                <img src={avatar} alt="Изображение профиля" className="profile__avatar"/>
                <button type="button" className="profile__avatar-edit-button"></button>
            </div>
            <div className="profile__container">
                <div className="profile__container-info">
                    <h1 className="profile__container-title">Жак-ив Кусто</h1>
                    <button className="profile__container-edit" type="button"></button>
                </div>
                <p className="profile__container-subtitle">Исследователь океана</p> 
            </div>
            <button className="profile__container-add" type="button"></button>
        </section>
        <section className="elements">
        </section>
    </main>
    )
}

export default Main