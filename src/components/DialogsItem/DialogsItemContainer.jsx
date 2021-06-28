import c from "./DialogsItemContainer.module.css"
import DialogsItem from "./DialogsItem";
import StoreContext from "../../StoreContext";

const DialogsItemContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <div className={c.dialogs__inner}>
          {Object.keys(store.users).map(el => (
            <DialogsItem key={el} fullName={store.users[el].profileStats["fullName"]} userId={el}/>
          ))}
        </div>
      )}
    </StoreContext.Consumer>
  )
}

export default DialogsItemContainer