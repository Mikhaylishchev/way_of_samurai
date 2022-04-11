import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { authAPI } from '../../api/api';

// import s from './Login.module.css'

const LoginForm = (props) => {

  return (

    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" component="input" name="login" />
      </div>
      <div>
        <Field placeholder="Password" component="input" name="password" />
      </div>
      <div>
        <Field component="input" type="checkbox" name="rememberMe" /> Remember me
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {

    authAPI.login()

    console.log(formData)
  }


  return (

    <div>
      <h1>Authorization</h1>

      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login;