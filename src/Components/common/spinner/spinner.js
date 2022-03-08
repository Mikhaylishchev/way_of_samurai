import React from 'react';
import s from '../common.module.css';
import img from '../../../logo.svg';


let Spinner = (props) => {

    return(
    
        <img src={img} className={s.spinner} alt="spinner"/>
    )
}

export default Spinner;