import Message from '../Message/Message';
import s from "./MessageList.module.css"
import { useEffect } from "react";

let usersArr = []

const MessageList = ({ messageLibrary, getProfileUser, getMessageList, ...props }) => {
  const interlocutorId = +props.match.params.interlocutor
  const hasUser = props.users.some(user => user.userId === +interlocutorId)
  let currentAddressee = ""
  if (hasUser && !usersArr.some(el => el === interlocutorId)) {
    usersArr.push(interlocutorId)
    currentAddressee = [...props.users].filter(user => user.userId === +interlocutorId)[0]
    getMessageList(interlocutorId, currentAddressee)
  }
  
  useEffect(() => getProfileUser(interlocutorId), [getProfileUser, interlocutorId])

  const messagesData = messageLibrary[interlocutorId]?.messagesData || []
  return (
    <div className={s.message__container}>
      {messagesData.map(el => <Message key={el.messageId}
                                       userPhoto={el.userPhoto}
                                       fullName={el.fullName} 
                                       fromCurrentUser={el.fromCurrentUser}
                                       message={el.message}
                                       date={el.date}
                                       loginUser={props.loginUser}
                                       checkedDialog={props.interlocutorId}/>)}
    </div>
  )
}

export default MessageList