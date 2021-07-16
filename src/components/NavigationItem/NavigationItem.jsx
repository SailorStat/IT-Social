import c from "./NavigationItem.module.css"
import { NavLink } from "react-router-dom"

const NavigationItem = (props) => {
  return (
    <NavLink to={props.link} exact className={c.nav__title} activeClassName={c.checked} userid={props.userid}>{props.essence}</NavLink>
  )
}

export default NavigationItem