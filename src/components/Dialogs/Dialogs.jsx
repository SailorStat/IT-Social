import c from "./Dialogs.module.css"
import TextCreator from './../TextCreator/TextCreator';
import DialogsItem from "../DialogsItem/DialogsItem";
import Message from './../Message/Message';
import userPhoto from "../../assets/userPhoto.jpg"

const initialState = {
  "1121": {
    online: true,
    fullName: "Гоша",
    userPhoto: userPhoto,
    messagesData: [{
      fromCurrentUser: true,
      date: "11:30 12.03.2021",
      message: "Привет, как твои дела?"
    }, {
      fromCurrentUser: false,
      date: "11:31 12.03.2021",
      message: `Привет) Рад тебя видеть в сети \n
У меня всё отлично, как твои дела?)`
    }, {
      fromCurrentUser: true,
      date: "11:32 12.03.2021",
      message: "Отдохнул, теперь снова готов работать не покладая мыши и клавиатуры)"
    }]
  },
  "1122": {
    online: true,
    fullName: "Петя",
    messagesData: [{
      fromCurrentUser: false,
      date: "12.03.2021",
      message: "Привет)"
    }]
  },
  "1123": {
    online: true,
    fullName: "Ира",
    messagesData: [{
      fromCurrentUser: false,
      date: "12.03.2021",
      message: "Привет)"
    }]
  },
  "1124": {
    online: true,
    fullName: "Юра",
    messagesData: [{
      fromCurrentUser: false,
      date: "12.03.2021",
      message: "Привет)"
    }]
  },
  "1125": {
    online: true,
    fullName: "Света",
    messagesData: [{
      fromCurrentUser: false,
      date: "12.03.2021",
      message: "Привет)"
    }]
  }
}

const Dialogs = () => {
  return (
    <div className={"content__wrapper " + c.dialogs}>
      <div className={c.dialogs__inner}>
        {Object.keys(initialState).map(el => <DialogsItem key={el} fullName={initialState[el].fullName} userId={el}/>)}
      </div>
      
      <div className={c.messages__inner}>
        <div className={c.message__items}>
          {console.log(initialState["1121"])}
          <Message key={"1121"} userPhoto={initialState["1121"].userPhoto} fullName={initialState["1121"].fullName}  fromCurrentUser={initialState["1121"].messagesData[0].fromCurrentUser} message={initialState["1121"].messagesData[0].message} date={initialState["1121"].messagesData[0].date}/>
        </div>
        <TextCreator />
      </div>
    </div>
  )
}

export default Dialogs