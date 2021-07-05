import Message from '../Message/Message';
import c from "./MessageList.module.css"

const MessageList = (props) => {
  return (
    <div className={c.message__container}>
      {props.messagesData.map(el => <Message key={"Message" + el.messageId} userPhoto={el.userPhoto} fullName={el.fullName}  fromCurrentUser={el.fromCurrentUser} message={el.message} date={el.date}/>)}
    </div>
  )
}

export default MessageList