import React from 'react';

const PopupWithForm = (props) => {
React.useEffect(()=>{
  
  const handleEscapeClosePopup = (evt) =>{
    if (evt.keyCode === 27){
      props.onClose()
    }
  }
  window.addEventListener('keydown', handleEscapeClosePopup)
  return () => {
    window.removeEventListener('keydown', handleEscapeClosePopup)
  }
},[props])

  return (
      <div className={`popup ${ props.isOpen ? 'popup_opened' : '' }`} onClick={props.onClose}>
      <div className="popup__conteiner" onClick={(evt) =>{evt.stopPropagation()}}>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name}>
          {props.children}
          
          <button className="popup__button-keep" type="submit" name="keep" aria-label="Сохранить">{props.textButton}</button>
        </form>
        <button className="popup__button-close" type="button" name="close" aria-label="закрыть" onClick={props.onClose}/>
      </div>
    </div>
  );
}

export default PopupWithForm;
