import c from "./NavigationItem.module.css"
import { NavLink } from "react-router-dom"

const initialState = {
  "Profile": "/",
  "Dialogs": "/dialogs",
  "News": "/news",
  "Settings": "/settings"
}


const NavigationItem = () => {
  return (
    <>
      {Object.keys(initialState).map((el) => 
        <NavLink key={el} to={initialState[el]} className={c.nav__title} activeClassName={c.checked} exact>{el}</NavLink>
      )}
    </>
  )
}

export default NavigationItem