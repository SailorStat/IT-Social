import c from "./DialogsItem.module.css"
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  return (
    <NavLink to={"/dialogs/" + props.userId} onClick={() => {props.setCheckedDialog(props.userId)}} className={c.dialogsitem__title} activeClassName={c.checked} exact>
      {props.fullName}
    </NavLink>
  )
}

export default DialogsItem