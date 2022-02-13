/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Menu.module.css';

const Menu = () => {

    return (

      <nav className="nav">
        <div className={`${s.item} ${s.active}`}>
          <a href='/profile'>Profile</a>
        </div>
        <div className={s.item}>
          <a href='/messages'>Messages</a>
        </div>
        <div className={s.item}>
          <a href='/news'>News</a>
        </div>
        <div className={s.item}>
          <a href='/music'>Music</a>
        </div>
        <div className={s.item}>
          <a href='/settings'>Settings</a>
        </div>
      </nav>
    )
}

export default Menu;