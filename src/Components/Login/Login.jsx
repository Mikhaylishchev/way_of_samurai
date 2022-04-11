import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCrerator, requiredField, minLengthCrerator } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../redux/authReducer';
import { Navigate } from 'react-router-dom';

const maxLength30 = maxLengthCrerator(30);
const minLength6 = minLengthCrerator(6);



const LoginForm = (props) => {

    return (

    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[requiredField, maxLength30]} placeholder="Email" component={Input} name="email" />
      </div>
      <div>
        <Field validate={[requiredField, minLength6]} type="password" placeholder="Password" component={Input} name="password" />
      </div>
      <div>
        <Field  component={Input} type="checkbox" name="rememberMe" /> Remember me
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

    props.login(formData.email, formData.password, formData.rememberMe);
  }
  

  return (

    props.isAuth

    ? <Navigate to="/profile" />

    : <div>
        <h1>Authorization</h1>

        <ReduxLoginForm onSubmit={onSubmit}/>
      </div>
  )
}

const mapStateToProps = (state) => {

  return {

    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login);