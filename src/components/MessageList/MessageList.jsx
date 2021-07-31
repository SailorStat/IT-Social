import Message from '../Message/Message';
import s from "./MessageList.module.css"

const MessageList = (props) => {
  return (
    <div className={s.message__container}>
      {props.messagesData.map(el => <Message key={"Message" + el.messageId}
                                             userPhoto={el.userPhoto}
                                             fullName={el.fullName} 
                                             fromCurrentUser={el.fromCurrentUser}
                                             message={el.message}
                                             date={el.date}
                                             loginUser={props.loginUser}
                                             checkedDialog={props.checkedDialog}/>)}
    </div>
  )
}

export default MessageList