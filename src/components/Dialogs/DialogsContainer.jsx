import Dialogs from "./Dialogs";
import { addMessageActionCreator, setDialogValueTextActionCreator } from "../../redux/redux-store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getText: state.dialogsPage.getDialogValueText(),
    userPhoto: state.dialogsPage.dialogs["17725"].messagesData[0].userPhoto
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setText: (event) => {
      dispatch(setDialogValueTextActionCreator(event))
    },
    addBlock: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer