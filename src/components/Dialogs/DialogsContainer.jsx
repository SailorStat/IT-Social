import Dialogs from "./Dialogs";
import { addMessage, setDialogValueText } from "../../redux/redux-store";
import { connect } from "react-redux";
import { setCurrentUserPage } from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  return {
    getText: state.dialogsPage.dialogValueText,
    userPhoto: state.loginPage.currentUser.avatar,
    loginUser: state.loginPage.currentUser.id
  }
}

const mapDispatchToProps = { setDialogValueText, addMessage, setCurrentUserPage }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer