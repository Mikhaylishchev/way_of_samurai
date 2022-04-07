import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../redux/profileReducer';
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

      userId = 22767;
    }

    this.props.getUserProfile(userId)   //    getUserProfile-thunk
  }

  render() {

    if(this.props.isAuth) return <Profile {...this.props} />

    return <Navigate to='/login' />
  }
}

let mapStateToProps = (state) => ({

  profile: state.profilePage.profile,
});

export default compose(

  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);