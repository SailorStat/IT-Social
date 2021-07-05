import c from "./Dialogs.module.css"
import TextCreator from '../TextCreator/TextCreator';
import MessageListContainer from "../MessageList/MessageListContainer";
import AddresseeListContainer from "./../AddresseeList/AddresseeListContainer";

const Dialogs = (props) => {
  return (
    <div className={"content__wrapper " + c.dialogs}>
      <AddresseeListContainer />
      
      <div className={c.messages__inner}>
        <MessageListContainer />
        <TextCreator placeholderText="Enter your message.." getText={props.getText} setText={props.setText} addBlock={props.addBlock} userPhoto={props.userPhoto}/>
      </div>
    </div>
  )
}

export default Dialogs