import React,{useState} from 'react';
import {api} from '../utils/api'

const Main = ({onEditAvatar, onAddPlace, onEditProfile}) => {

  const [userName, setUserName] = useState('')
  
  const [userDescription, setUserDescription] =  useState('')

  const [userAvatar, setUserAvatar] = useState(null)

React.useEffect(() =>{
  api.getInfoUser()
  .then((data) => {
    setUserName(data.name)
    setUserDescription(data.about)
    setUserAvatar(data.avatar)
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
      </section>
    </main>
  );
}

export default Main;
