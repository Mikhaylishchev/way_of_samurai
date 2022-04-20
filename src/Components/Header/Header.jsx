import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  
  return (

    <header className={s.header} >

      <NavLink to="/profile"><img src="https://clck.ru/avtRN" alt="logotype"></img></NavLink>

      <div className={s.loginBlock}>

        {props.isAuth ? <div className={s.logout}>{props.login} <img src="https://clck.ru/feDnz" alt="logout" onClick={props.logout} /></div> : <NavLink to="/login" >LogIn</NavLink>}

      </div>
    </header >
  )
}

export default Header;