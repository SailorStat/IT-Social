import { connect } from "react-redux";
import Status from "./Status";
import { withRouter } from "react-router-dom";
import { setStatus, setStatusEditText, unsetEditMode, setEditMode, pullStatus } from "./../../redux/redux-store";
import { compose } from "redux";

const mapStateToProps = state => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    status: state.profilePage.users[currentUserPage].status,
    editText: state.loginPage.statusEditText,
    editMode: state.loginPage.statusEditMode,
    currentUserId: state.loginPage.loginUser.id,
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