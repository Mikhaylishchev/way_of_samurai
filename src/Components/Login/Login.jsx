import React from "react";
import s from './Login.module.css';
import ReduxLoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../redux/authReducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {

    console.log(props)

    const onSubmit = (formData) => {

        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {

        return <Navigate to="/profile" />
    }

    return (

        <div className={s.auth}>

            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>        
    )
}

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect (mapStateToProps, {login})(Login);