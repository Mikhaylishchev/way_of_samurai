import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';

const Menu = () => {

    return (

      <nav className="nav">
        <div className={s.menuWrapper}>

        <div className={`${s.item}`}>
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
          <NavLink to='/users' className = { item => item.isActive ? s.activeLink : s.item }>Users</NavLink>
        </div>
        </div>

      </nav>
    )
}

export default Menu;