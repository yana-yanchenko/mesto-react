import React from 'react';

const ImagePopup = () => {
  return (
      <div className={`popup popup_type_photo`}>
      <figure className="popup__place-image">
        <img className="popup__image" src="#" alt=""/>
        <button className="popup__button-close" type="button" name="close" aria-label="закрыть"></button>
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
