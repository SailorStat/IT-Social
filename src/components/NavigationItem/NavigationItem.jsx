import s from "./NavigationItem.module.css"
import { NavLink } from "react-router-dom"

const NavigationItem = (props) => {
  return (
    <NavLink to={props.link} exact className={s.nav__title} activeClassName={s.checked} userid={props.userid}>{props.essence}</NavLink>
  )
}

export default NavigationItem