import s from "./Addressee.module.css"
import { NavLink } from 'react-router-dom';

const Addressee = (props) => {
  return (
    <NavLink to={"/dialogs/" + props.userId} onClick={props.setCheckedDialog} userid={props.userId} className={s.dialogsitem__title} activeClassName={s.checked} exact>
      {props.fullName}
    </NavLink>
  )
}

export default Addressee