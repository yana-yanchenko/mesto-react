import React,{useState} from 'react';
import {api} from '../utils/api'

const Main = ({onEditAvatar, onAddPlace, onEditProfile}) => {

  const [userName, setUserName] = useState('')
  
  const [userDescription, setUserDescription] =  useState('')

  const [userAvatar, setUserAvatar] = useState(null)

  const [cards, setCards] = useState([])

React.useEffect(() =>{
  
})

React.useEffect(() =>{
  api.getInfoUser()
  .then((data) => {
    setUserName(data.name)
    setUserDescription(data.about)
    setUserAvatar(data.avatar)
  })
  api.getInitialCards()
  .then((data) =>{
    setCards(data)
  })
})

  return (
    <main className="main">
      <div className="profile">
        <div className="profile__box-avatar" onClick={onEditAvatar}>
         <img className="profile__avatar" src={userAvatar} alt="фото пользователя"/>
         <div className="profile__lens-avatar"></div>
      </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__button-edit" type="button" onClick={onEditProfile}/>
          <p className="profile__occupation">{userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={onAddPlace}/>
      </div>
      <section className="elements">
        {
          cards.map((card) =>
            <div className="element" key={card._id}>
              <button className="element__button-delete"></button>
              <img className="element__image" src={card.link} alt={card.name}/>
          <div className="element__description">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like">
            <button className="element__button-like" type="button"></button>
            <p className="element__count-like">{card.likes.length}</p>
          </div>
          </div>
        </div>
          )
        }
      </section>
    </main>
  );
}

export default Main;
