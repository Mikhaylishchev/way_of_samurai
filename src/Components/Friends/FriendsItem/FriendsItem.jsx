import React from 'react';
import s from '../Friends.module.css';

const Friend = (props) => {

  return(

    <div className={s.friend}>
      <img src={props.avatar} className={s.avatar} alt="avatar"></img>
      <div className={s.name}>{`${props.name} ${props.lastname}`}</div>
      
    </div>

    
  )
}

export default Friend;