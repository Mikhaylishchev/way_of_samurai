import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Friends.module.css';

const Friend = (props) => {

  return(

    <div className={s.friend}>

      <NavLink to={`${props.lastname}_${props.name}`}>
        <img src={props.avatar} className={s.avatar} alt="avatar"></img>
        <div className={s.name}>{`${props.name} ${props.lastname}`}</div>
      </NavLink>
      
    </div>

    
  )
}

export default Friend;