import React from 'react';

const Main = () => {
  return (
    <main className="main">
      <div className="profile">
        <div className="profile__box-avatar">
         <img className="profile__avatar" src="#" alt="фото пользователя"/>
         <div className="profile__lens-avatar"></div>
      </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__button-edit" type="button"/>
          <p className="profile__occupation">Исследователь океана</p>
        </div>
        <button className="profile__button-add" type="button"/>
      </div>
      <section className="elements">
      </section>
    </main>
  );
}

export default Main;
