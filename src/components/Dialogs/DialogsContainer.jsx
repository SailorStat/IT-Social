import Dialogs from "./Dialogs";
import { postMessage, setDialogValueText, pullDialogs } from "../../redux/redux-store";
import { connect } from "react-redux";
import withLoginRedirect from "../../hoc/withLoginRedirect";
import { compose } from "redux";
import { getCurrentUserId, getCurrentUserPhoto } from "../../redux/selectors/user-selector";
import { getDialogValueText } from "./../../redux/selectors/dialogs-selector";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getText: getDialogValueText(state),
    userPhoto: getCurrentUserPhoto(state),
    userId: getCurrentUserId(state),
    fullName: state.loginPage.loginUser.name
  }
}

const mapDispatchToProps = { setDialogValueText, postMessage, pullDialogs}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withLoginRedirect
)(Dialogs)