import s from "./Dialogs.module.css"
import TextCreator from "../../loc/TextCreator/TextCreator";
import MessageListContainer from "../MessageList/MessageListContainer";
import AddresseeListContainer from "../AddresseeList/AddresseeListContainer";

const Dialogs = (props) => {
  return (
    <div className={"content__wrapper " + s.dialogs}>
      <AddresseeListContainer />
      
      <div className={s.messages__inner}>
        <MessageListContainer />
        <TextCreator placeholderText="Enter your message.."
                     getText={props.getText}
                     setText={props.setDialogValueText}
                     addBlock={props.addMessage}
                     userPhoto={props.userPhoto}
                     fullName={props.fullName}
                     userid={props.userId}
        />
      </div>
    </div>
  )
}

export default Dialogs