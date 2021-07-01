import Dialogs from "./Dialogs";
import StateContext from "./../../StateContext";
import { addMessage } from "../../redux/state";

const DialogsContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <Dialogs getText={state.dialogsPage.getDialogValueText()} setText={state.dialogsPage.setDialogValueText.bind(state.dialogPage)} addBlock={addMessage}/>
      )}
    </StateContext.Consumer>
  )
}

export default DialogsContainer