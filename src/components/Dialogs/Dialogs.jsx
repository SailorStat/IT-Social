import c from "./Dialogs.module.css"
import TextCreator from '../TextCreator/TextCreator';
import MessageContainer from "../Message/MessageContainer";
import DialogsItemContainer from "../DialogsItem/DialogsItemContainer";
import { Route } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={"content__wrapper " + c.dialogs}>
      <DialogsItemContainer />
      
      <div className={c.messages__inner}>
        <MessageContainer />
        <TextCreator placeholderText="Enter your message.." getText={props.getText} setText={props.setText} addBlock={props.addBlock}/>
      </div>
    </div>
  )
}

export default Dialogs