import Message from './../Message/Message';
import c from "./MessageContainer.module.css"
import StateContext from "../../StateContext";
import noAvatar from "../../assets/no-avatar.png"

const MessageContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <div className={c.message__container}>
          {state.dialogs[state.getCheckedDialog()]?.messagesData.map(el => <Message key={"Message" + el.messageId} userPhoto={el.fromCurrentUser? el.userPhoto : noAvatar} fullName={el.fromCurrentUser? "Sailor Stat" : el.fullName}  fromCurrentUser={el.fromCurrentUser} message={el.message} date={el.date}/>)}
        </div>
      )}
    </StateContext.Consumer>
  )
}

export default MessageContainer