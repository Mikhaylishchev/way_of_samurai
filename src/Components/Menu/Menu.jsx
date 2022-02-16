/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';

const Menu = () => {

    return (

      <nav className="nav">
        <div className={s.menuWrapper}>
        <div className={`${s.item} ${s.active}`}>     {/* <NavLink to> в react-router-dom заменяет <a href=""> */}
          <NavLink to='/profile' className = { item => item.isActive ? s.activeLink : s.item }>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/messages' className = { item => item.isActive ? s.activeLink : s.item }>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className = { item => item.isActive ? s.activeLink : s.item }>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className = { item => item.isActive ? s.activeLink : s.item }>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className = { item => item.isActive ? s.activeLink : s.item }>Settings</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/friends' className = { item => item.isActive ? s.activeLink : s.item }>Friends</NavLink>
        </div>
        </div>
      </nav>
    )
}

export default Menu;