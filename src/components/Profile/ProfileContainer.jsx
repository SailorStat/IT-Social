import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { getProfileUser, getIdCurrentUser } from "./../../redux/redux-store";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    idCurrentUser: state.loginPage.loginUser.id,
    hasUser: state.profilePage.users[state.profilePage.currentUserPage]
  }
}

const mapDispatchToProps = { getProfileUser, getIdCurrentUser }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Profile)