import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {

        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {

        this.setState({ 

            editMode: true
        });
    }

    deactivateEditMode = () => {

        this.setState({ 

            editMode: false
        });

        this.props.updateStatus(this.state.status);
    }

    statusChanging = (event) => {

        this.setState({status: event.currentTarget.value})
    }

    render() {

        return (

            <div>
                {this.state.editMode

                    ? <div>
                        <input onChange={this.statusChanging} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
                    </div>

                    : <div className={s.status}>
                        <span onClick={this.activateEditMode}>{this.props.status || '...'}</span>
                    </div>
                }


            </div>
        )
    }
}

export default ProfileStatus;