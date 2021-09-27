import React from 'react';

const Card = ({card, onCardClick}) => {

  function handleClick() {
    onCardClick(card);
  }
  return (
       <div className="element">
              <button className="element__button-delete"></button>
              <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
          <div className="element__description">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like">
            <button className="element__button-like" type="button"></button>
            <p className="element__count-like">{card.likes.length}</p>
          </div>
          </div>
        </div>
  );
}

export default Card;
