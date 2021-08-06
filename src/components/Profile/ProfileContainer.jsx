import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { getProfileUser } from "./../../redux/redux-store";
import { compose } from "redux";
import { getCurrentUserId, hasUserSuper } from "./../../redux/selectors/user-selector";


const mapStateToProps = (state) => {
  return {
    idCurrentUser: getCurrentUserId(state),
    hasUser: hasUserSuper(state)
  }
}

const mapDispatchToProps = { getProfileUser}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Profile)