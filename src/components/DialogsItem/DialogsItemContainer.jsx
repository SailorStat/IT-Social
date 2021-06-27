import c from "./DialogsItemContainer.module.css"
import DialogsItem from "./DialogsItem";

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

const DialogsItemContainer = () => {
  return (
    <div className={c.dialogs__inner}>
      {Object.keys(initialState).map(el => <DialogsItem key={el} fullName={initialState[el].fullName} userId={el}/>)}
    </div>
  )
}

export default DialogsItemContainer