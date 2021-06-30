import Dialogs from "./Dialogs";
import StateContext from "./../../StateContext";

const DialogsContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <Dialogs getText={state.getDialogsValueText()} setText={state.setDialogsValueText} addBlock={state.addMessage}/>
      )}
    </StateContext.Consumer>
  )
}

export default DialogsContainer