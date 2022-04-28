import { reduxForm, Field } from "redux-form";
import { Input, Textarea } from "../../common/FormControls/FormControls";
import s from "../../Login/LoginForm.module.css";

const ProfileDataForm = ({ handleSubmit, error, profile, isOwner }) => {

    return (

        <div className={s.editProfileFormWrapper}>
            <form onKeyDown={(event) => {if(event.key === 'Escape') console.log('Esc')}} onSubmit={handleSubmit}>
                
                <div><b>Name:</b> <div><Field component={Input} name="fullName" placeholder="My name"></Field></div></div>
                <div><b><label htmlFor="checkbox">lookingForAJob:</label></b> 
                    {/* <Field component={Input} type="checkbox" name="lookingForAJob"></Field> */}
                    <Field component={Input} id="checkbox" type="checkbox" name="lookingForAJob" />
                    
                </div>
    
                {/* {profile.aboutMe ? <div><b>aboutMe: </b> {profile.aboutMe}</div> : null} */}
    
                <div><b>My professional skills:</b>
                    <Field component={Textarea} name="lookingForAJobDescription" placeholder="My professional skills..."></Field>
                </div>
                
                <div><b>About me:</b>
                    <Field component={Textarea} name="aboutMe" placeholder="About me..."></Field>
                </div>
                
                
                <div>
                    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
    
                        return (
                            <div key={key}>
                                <b>{key}: <Field component={Input} name={`contacts.${key}`} placeholder={key}/></b>
                            </div>)
                    })}
                </div>
    
                <div className={error ? s.formSummaryError : null}>{error}</div>
    
                {isOwner && <button className={s.saveEditsBtn} onClick={() => {}}><img className={s.saveEditsIcon} src='https://clck.ru/gfU7G' alt="Save edits" title="Save edits"></img></button>}
    
            </form>
        </div>)
}

const ReduxProfileDataForm = reduxForm({form: 'profileEdit'})(ProfileDataForm);

export default ReduxProfileDataForm;
