/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (

        <header className={s.header}>
            
          <NavLink to="/profile"><img src="https://clck.ru/avtRN"></img></NavLink>
        </header>
    )
}

export default Header;