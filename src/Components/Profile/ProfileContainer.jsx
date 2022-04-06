import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../redux/profileReducer';
import { useParams } from "react-router-dom";

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

    return (

      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({

  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);