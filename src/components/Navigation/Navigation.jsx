import s from"./Navigation.module.css"
import NavigationItem from "../NavigationItem/NavigationItem"
import cn from "classnames";
import { useState } from "react";

const Navigation = (props) => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    visible ? setVisible(false) : setVisible(true)
  }
  return (
    <div className={s.navigation}>
      <div className={cn(s.navigation__opener, {[s.active]: visible})} onClick={toggleVisible}>Menu</div>
      {Object.keys(props.pages).map((el) =>
        <div className={cn(s.navigation__item, {[s.active]: visible})} key={"NavigationItemWrapper" + el} onClick={toggleVisible}>
          <NavigationItem key={"NavigationItem" + el} essence={el} link={props.pages[el]}/>
        </div>
      )}
    </div>
  )
}

export default Navigation