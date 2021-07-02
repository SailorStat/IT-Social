import Dialogs from "./Dialogs";
import StoreContext from "./../../StoreContext";
import { addMessageActionCreator } from "../../redux/store";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <Dialogs getText={store.getDialogValueText()} setText={store.setDialogValueText.bind(store)} addBlock={() => store.dispatch(addMessageActionCreator())}/>
      )}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer