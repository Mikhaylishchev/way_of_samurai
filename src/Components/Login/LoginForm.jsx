import { reduxForm, Field } from 'redux-form';
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormControls';
import s from './LoginForm.module.css';

const LoginForm = (props) => {

    return (

        <div className={s.auth}>

                <h1>Authorization</h1>
                <form onSubmit={props.handleSubmit}>
                    
                    <div className={s.textareas}>
                        <Field component={Input} type="text" name="email" placeholder="Email" validate={[requiredField]}/>
                        <Field component={Input} type="password" name="password" placeholder="Password"  validate={[requiredField]}/>
                    </div>
                    
                    
                    
                    <div className={s.button}>
                        
                        <div><Field component={Input} id="checkbox" type="checkbox" name="rememberMe" /><label htmlFor="checkbox">Remember me</label></div>
                        <button>Sign In</button>
                    </div>
                </form>

        </div>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

export default ReduxLoginForm;