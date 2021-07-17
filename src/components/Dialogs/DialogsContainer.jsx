import Dialogs from "./Dialogs";
import { addMessage, setDialogValueText } from "../../redux/redux-store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getText: state.dialogsPage.dialogValueText,
    userPhoto: state.loginPage.loginUser.photo,
    userId: state.loginPage.loginUser.id,
    fullName: state.loginPage.loginUser.name
  }
}

const mapDispatchToProps = { setDialogValueText, addMessage}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer