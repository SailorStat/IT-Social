import Dialogs from "./Dialogs";
import StoreContext from "./../../StoreContext";
import { addMessageActionCreator, setDialogValueTextActionCreator } from "../../redux/store";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <Dialogs getText={store.getState().dialogsPage.getDialogValueText()} setText={(event) => store.dispatch(setDialogValueTextActionCreator(event))} addBlock={() => store.dispatch(addMessageActionCreator())}/>
      )}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer