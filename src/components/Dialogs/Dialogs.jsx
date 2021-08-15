import s from "./Dialogs.module.css"
import TextCreator from "../../loc/TextCreator/TextCreator";
import MessageListContainer from "../MessageList/MessageListContainer";
import AddresseeListContainer from "../AddresseeList/AddresseeListContainer";
import { useEffect } from "react";

const Dialogs = ({pullDialogs, ...props}) => {
  const interlocutorId = props.match.params.interlocutor
  const sendMessage = () => {
    props.postMessage(interlocutorId, props.getText)
  }
  useEffect(pullDialogs, [pullDialogs])

  return (
    <div className={"content__wrapper " + s.dialogs}>
      <AddresseeListContainer />
      
      {
        interlocutorId && (
          <div className={s.messages__inner}>
            <MessageListContainer />
            <TextCreator placeholderText="Enter your message.."
                        getText={props.getText}
                        setText={props.setDialogValueText}
                        addBlock={sendMessage}
                        userPhoto={props.userPhoto}
                        fullName={props.fullName}
                        userid={props.userId}
            />
          </div>
        )
      }
      
    </div>
  )
}

export default Dialogs