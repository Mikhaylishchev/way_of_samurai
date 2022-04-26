import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, savePhoto, updateStatus } from '../redux/profileReducer';
import { useParams } from "react-router-dom";
import { compose } from 'redux';

export const withRouter = WrappedComponent => props => {

  const params = useParams();

  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

class ProfileContainer extends React.Component {

  refreshProfile() {

    let userId = this.props.params.userId;

    if (!userId) {

      userId = this.props.userId;
    }

    this.props.getUserProfile(userId);   //    getUserProfile-thunk

    this.props.getStatus(userId);
  }

  componentDidMount() {

    this.refreshProfile();    
  }

  componentDidUpdate(prevProps) {

    if(this.props.params.userId !== prevProps.params.userId){
      this.refreshProfile();
    }
  }

  render() {

    return <Profile {...this.props} status={this.props.status}
                                    updateStatus={this.props.updateStatus}
                                    isOwner={!this.props.params.userId}
                                    savePhoto={this.props.savePhoto}
                                    />
  }
}

let mapStateToProps = (state) => ({

  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.id
});

export default compose(

  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);