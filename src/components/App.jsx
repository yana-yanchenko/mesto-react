import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import {api} from '../utils/api'
import ImagePopup from './ImagePopup'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }
  const closeAllPopups =() => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }
  
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const handleEditAvatarClick =() => {
    setIsEditAvatarPopupOpen(true)
  }

   const [selectedCard, setSelectedCard] = React.useState(null)
   const handleCardClick = (card) =>{
    setSelectedCard(card)
   }


  const [cards, setCards] = React.useState([])

   React.useEffect(() =>{
    api.getInitialCards()
    .then((data) =>{
      setCards(data)
    })
  })

  return (
    <div className="page">
      <Header/>
      <Main cards={cards} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} handleCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name="profile" title="Редактировать профиль" textButton="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}> 
        <input className="popup__input popup__input_value_name" name="name" type="text" id="profile-name" minLength="2" maxLength="40" value="Жак-Ив Кусто" required/>
          <span className="popup__input-error " id="profile-name-error"></span>
          <input className="popup__input popup__input_value_occupation" name="occupation" id="profile-occupation" type="text" minLength="2" maxLength="200"
            value="Исследователь океана" required/>
            <span className="popup__input-error" id="profile-occupation-error"></span>
      </PopupWithForm>
      <PopupWithForm  name="card" title="Новое место" textButton="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_value_title" name="name" id="card-title" type="text" minLength="2" maxLength="30" placeholder="Название" required/>
          <span className="popup__input-error" id="card-title-error"></span>
          <input className="popup__input popup__input_value_link" name="link" id="card-link" type="url" placeholder="Ссылка на картинку"
            required/>
            <span className="popup__input-error" id="card-link-error"></span>
    </PopupWithForm>
    <PopupWithForm name="avatar" title="Обновить аватар" textButton="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_value_avatar" name="avatar" id="avatar" type="url" placeholder="Ссылка" required/>
          <span className="popup__input-error" id="avatar-error"></span>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

