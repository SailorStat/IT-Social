import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { getProfileUser, getIdCurrentUser } from "./../../redux/redux-store";
import { compose } from "redux";
import { getInitialize, getCurrentUserId, hasUserSuper } from "./../../redux/selectors/user-selector";

const mapStateToProps = (state) => {
  return {
    idCurrentUser: getCurrentUserId(state),
    hasUser: hasUserSuper(state),
    initialize: getInitialize(state)
  }
}

const mapDispatchToProps = { getProfileUser, getIdCurrentUser }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Profile)