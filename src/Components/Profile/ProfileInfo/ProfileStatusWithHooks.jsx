import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {

        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {setEditMode(true)}

    const deactivateEditMode = () => {

        setEditMode(false)

        props.updateStatus(status);
    }

    const deactivateEditModeWithKey = (event) => {

        if(event.key === 'Enter') {

            deactivateEditMode()
        } else  if(event.key === 'Escape') {

            setEditMode(false);
        }
    }

    const statusChanging = (event) => {

        setStatus(event.currentTarget.value)
    }

    return (

        <div>

            { editMode &&

                <div>
                    <input value={status} onChange={statusChanging} onBlur={deactivateEditMode} onKeyDown={deactivateEditModeWithKey} autoFocus={true}></input>
                </div>
            }

            { !editMode &&

                <div className={s.status}>
                    <span onClick={props.isAuth && props.isOwner ? activateEditMode : null}>{props.isAuth ? props.status || '...' :  props.status || <NavLink to="/login">You need to authorize.</NavLink>}</span>
                </div>
            }
        </div >
    )

}

export default ProfileStatusWithHooks;