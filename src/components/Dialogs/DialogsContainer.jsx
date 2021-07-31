import Dialogs from "./Dialogs";
import { addMessage, setDialogValueText } from "../../redux/redux-store";
import { connect } from "react-redux";
import withLoggedRedirect from "../../hoc/withLoggedRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    getText: state.dialogsPage.dialogValueText,
    userPhoto: state.loginPage.loginUser.photo,
    userId: state.loginPage.loginUser.id,
    fullName: state.loginPage.loginUser.name
  }
}

const mapDispatchToProps = { setDialogValueText, addMessage}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoggedRedirect
)(Dialogs)