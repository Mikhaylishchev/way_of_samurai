import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../redux/profileReducer';
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

  componentDidMount() {

    let userId = this.props.params.userId;

    if (!userId) {

      userId = this.props.profile.userId;
    }

    this.props.getUserProfile(userId);   //    getUserProfile-thunk

    this.props.getStatus(userId);
  }

  render() {

    return <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
  }
}

let mapStateToProps = (state) => ({

  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default compose(

  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);