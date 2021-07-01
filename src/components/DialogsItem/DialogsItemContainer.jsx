import c from "./DialogsItemContainer.module.css"
import DialogsItem from "./DialogsItem";
import StateContext from "../../StateContext";

const DialogsItemContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <div className={c.dialogs__inner}>
          {Object.keys(state.profilePage.users).map(el => (
            <DialogsItem key={"DialogsItem" + el} fullName={state.profilePage.users[el].profileStats["fullName"]} userId={el} setCheckedDialog={state.dialogsPage.setCheckedDialog}/>
          ))}
        </div>
      )}
    </StateContext.Consumer>
  )
}

export default DialogsItemContainer