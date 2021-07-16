import Dialogs from "./Dialogs";
import { addMessage, setDialogValueText } from "../../redux/redux-store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getText: state.dialogsPage.getDialogValueText(),
    userPhoto: state.loginPage.currentUser.avatar
  }
}

const mapDispatchToProps = { setDialogValueText, addMessage }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer