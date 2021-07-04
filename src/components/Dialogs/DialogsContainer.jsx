import Dialogs from "./Dialogs";
import StoreContext from "./../../StoreContext";
import { addMessageActionCreator, setDialogValueTextActionCreator } from "../../redux/redux-store";
import noAvatar from "./../../assets/img/no-avatar.png"
import userPhoto from "./../../assets/img/userPhoto.jpg"
import { connect } from "react-redux";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => (
//         <Dialogs getText={store.getState().dialogsPage.getDialogValueText()}
//                  setText={(event) => store.dispatch(setDialogValueTextActionCreator(event))}
//                  addBlock={() => store.dispatch(addMessageActionCreator())}
//                  userPhoto={store.getState().dialogsPage.dialogs["17725"].messagesData[0].userPhoto}/>
//       )}
//     </StoreContext.Consumer>
//   )
// }

const mapStateToProps = (store) => {
  return {
    getText: store.dialogsPage.getDialogValueText(),
    userPhoto: store.dialogsPage.dialogs["17725"].messagesData[0].userPhoto
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