import React from 'react';

const ImagePopup = ({card, onClose}) => {
  return (
      <div className={`popup popup_type_photo ${card ? 'popup_opened' : "" } `}>
      <figure className="popup__place-image">
        <img className="popup__image" src={ card && card.link } alt={card && card.name}/>
        <button className="popup__button-close" type="button" name="close" aria-label="закрыть" onClick={onClose} />
        <figcaption className="popup__caption">{card && card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
