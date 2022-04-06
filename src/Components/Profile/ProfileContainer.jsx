import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../redux/profileReducer';
import { useParams, Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);   //    hoc

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);