import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../redux/profileReducer';
import { useParams, Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const withRouter = WrappedComponent => props => {

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

    if(this.props.isAuth) return <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />

    return <Navigate to='/login' />    
  }
}

let mapStateToProps = (state) => ({

  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(

  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);