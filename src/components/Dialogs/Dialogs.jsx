import c from "./Dialogs.module.css"
import TextCreator from './../TextCreator/TextCreator';
import DialogsItem from "../DialogsItem/DialogsItem";
import MessageContainer from "./../Message/MessageContainer";

const initialState = {
  "1121": {
    online: true,
    fullName: "Гоша"
  },
  "1122": {
    online: true,
    fullName: "Петя"
  },
  "1123": {
    online: true,
    fullName: "Ира"
  },
  "1124": {
    online: true,
    fullName: "Юра"
  },
  "1125": {
    online: true,
    fullName: "Света"
  }
}

const Dialogs = () => {
  return (
    <div className={"content__wrapper " + c.dialogs}>
      <div className={c.dialogs__inner}>
        {Object.keys(initialState).map(el => <DialogsItem key={el} fullName={initialState[el].fullName} userId={el}/>)}
      </div>
      
      <div className={c.messages__inner}>
        <MessageContainer />
        <TextCreator />
      </div>
    </div>
  )
}

export default Dialogs