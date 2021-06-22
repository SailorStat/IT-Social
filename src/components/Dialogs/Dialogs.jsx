import c from "./Dialogs.module.css"
import TextCreator from './../TextCreator/TextCreator';
import DialogsItem from "../DialogsItem/DialogsItem";

const initialState = {
  "1121": {
    online: true,
    fullName: "Гоша",
    messages: [{
      from: false,
      date: "12.03.2021",
      message: "Привет)"
    }]
  },
  "1122": {
    online: true,
    fullName: "Петя",
    messages: [{
      from: false,
      date: "12.03.2021",
      message: "Привет)"
    }]
  },
  "1123": {
    online: true,
    fullName: "Ира",
    messages: [{
      from: false,
      date: "12.03.2021",
      message: "Привет)"
    }]
  },
  "1124": {
    online: true,
    fullName: "Юра",
    messages: [{
      from: false,
      date: "12.03.2021",
      message: "Привет)"
    }]
  },
  "1125": {
    online: true,
    fullName: "Света",
    messages: [{
      from: false,
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
          <div className="message">Привет</div>
          <div className="message">как ты?</div>
          <div className="message">Олично</div>
          <div className="message">Что случилось?</div>
          <div className="message">Нашёл работу</div>
        </div>
        <TextCreator />
      </div>
    </div>
  )
}

export default Dialogs