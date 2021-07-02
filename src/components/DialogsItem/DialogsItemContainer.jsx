import c from "./DialogsItemContainer.module.css"
import DialogsItem from "./DialogsItem";
import StoreContext from "../../StoreContext";
import { setChekedDialogActionCreator } from "../../redux/store";

const DialogsItemContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <div className={c.dialogs__inner}>
          {Object.keys(store.getState().profilePage.users).map(el => (
            <DialogsItem key={"DialogsItem" + el} fullName={store.getState().profilePage.users[el].profileStats["fullName"]} userId={el} setCheckedDialog={() => store.dispatch(setChekedDialogActionCreator(el))}/>
          ))}
        </div>
      )}
    </StoreContext.Consumer>
  )
}

export default DialogsItemContainer