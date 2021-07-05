import c from "./Addressee.module.css"
import { NavLink } from 'react-router-dom';

const Addressee = (props) => {
  return (
    <NavLink to={"/dialogs/" + props.userId} onClick={props.setCheckedDialog} userId={props.userId} className={c.dialogsitem__title} activeClassName={c.checked} exact>
      {props.fullName}
    </NavLink>
  )
}

export default Addressee