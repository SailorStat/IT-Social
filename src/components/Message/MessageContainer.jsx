import userPhoto from "../../assets/userPhoto.jpg"
import Message from './../Message/Message';
import c from "./MessageContainer.module.css"

// Объект переписки с текущим пользователем
const initialState = {
    online: true,
    fullName: "Гоша",
    userPhoto: userPhoto,
    messagesData: [{
      fromCurrentUser: true,
      date: "11:30 12.03.2021",
      message: "Привет, как твои дела?",
      messageId: 1233
    }, {
      fromCurrentUser: false,
      date: "11:31 12.03.2021",
      message: `Привет) Рад тебя видеть в сети. У меня всё отлично, как твои дела?)`,
      messageId: 1234
    }, {
      fromCurrentUser: true,
      date: "11:32 12.03.2021",
      message: "Отдохнул, теперь снова готов работать, не покладая мыши и клавиатуры).",
      messageId: 1235
    }]
  }

const MessageContainer = () => {
  return (
    <div className={c.message__container}>
      {initialState.messagesData.map(el => <Message key={el.messageId} userPhoto={initialState.userPhoto} fullName={initialState.fullName}  fromCurrentUser={el.fromCurrentUser} message={el.message} date={el.date}/>)}
    </div>
  )
}

export default MessageContainer