import { connect } from "react-redux";
import Status from "./Status";
import { withRouter } from "react-router-dom";
import { setStatus, setStatusEditText, unsetEditMode, setEditMode, pullStatus } from "./../../redux/redux-store";
import { compose } from "redux";
import { getCurrentUserId } from "../../redux/selectors/user-selector";

const mapStateToProps = state => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    status: state.profilePage.users[currentUserPage].status,
    editText: state.loginPage.statusEditText,
    editMode: state.loginPage.statusEditMode,
    currentUserId: getCurrentUserId(state)
  }
}

const mapDispatchToProps = {
  setStatus,
  setStatusEditText,
  unsetEditMode,
  setEditMode,
  pullStatus
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Status)