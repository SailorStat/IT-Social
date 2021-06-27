import c from "./NavigationItem.module.css"
import { NavLink } from "react-router-dom"

const NavigationItem = (props) => {
  return (
    <NavLink to={props.link} className={c.nav__title} activeClassName={c.checked} exact>{props.essence}</NavLink>
  )
}

export default NavigationItem