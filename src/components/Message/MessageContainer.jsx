import Message from './../Message/Message';
import c from "./MessageContainer.module.css"
import StoreContext from "../../StoreContext";
import noAvatar from "../../assets/img/no-avatar.png"

const MessageContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <div className={c.message__container}>
          {store.getState().dialogsPage.dialogs[store.getState().dialogsPage.getCheckedDialog()]?.messagesData.map(el => <Message key={"Message" + el.messageId} userPhoto={el.fromCurrentUser? el.userPhoto : noAvatar} fullName={el.fromCurrentUser? "Sailor Stat" : el.fullName}  fromCurrentUser={el.fromCurrentUser} message={el.message} date={el.date}/>)}
        </div>
      )}
    </StoreContext.Consumer>
  )
}

export default MessageContainer