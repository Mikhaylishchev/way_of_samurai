/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Menu.module.css';

const Menu = () => {

    return (

      <nav className="nav">
        <div className={`${s.item} ${s.active}`}>
          <a>Profile</a>
        </div>
        <div className={s.item}>
          <a>Messages</a>
        </div>
        <div className={s.item}>
          <a>News</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>
        <div className={s.item}>
          <a>Settings</a>
        </div>
      </nav>
    )
}

export default Menu;