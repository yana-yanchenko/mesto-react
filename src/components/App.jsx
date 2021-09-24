import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'

function App() {
  const [isProfilePopup, setIsProfilePopup] = React.useState(false)
  const handlePopupProfile = () => {
    setIsProfilePopup(true)
  }
  const closeAllPopups =() => {
    setIsProfilePopup(false)
  }
  return (
    <div className="page">
      <Header/>
      <Main handlePopupProfile={handlePopupProfile}/>
      <Footer/>
      <PopupWithForm name="profile" title="Редактировать профиль" textButton="Сохранить" isOpen={isProfilePopup} onClose={closeAllPopups}> 
        <input className="popup__input popup__input_value_name" name="name" type="text" id="profile-name" minLength="2" maxLength="40" value="Жак-Ив Кусто" required/>
          <span className="popup__input-error " id="profile-name-error"></span>
          <input className="popup__input popup__input_value_occupation" name="occupation" id="profile-occupation" type="text" minLength="2" maxLength="200"
            value="Исследователь океана" required/>
            <span className="popup__input-error" id="profile-occupation-error"></span>
      </PopupWithForm>
      
    </div>
  );
}

export default App;

