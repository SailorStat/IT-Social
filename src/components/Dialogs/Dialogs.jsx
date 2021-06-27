import c from "./Dialogs.module.css"
import TextCreator from '../TextCreator/TextCreator';
import MessageContainer from "../Message/MessageContainer";
import DialogsItemContainer from "../DialogsItem/DialogsItemContainer";

const Dialogs = () => {
  return (
    <div className={"content__wrapper " + c.dialogs}>
      <DialogsItemContainer />
      
      <div className={c.messages__inner}>
        <MessageContainer />
        <TextCreator />
      </div>
    </div>
  )
}

export default Dialogs