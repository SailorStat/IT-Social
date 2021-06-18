import c from"./Navigation.module.css"
import NavigationItem from '../NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <div className={c.navigation}>
      {["Profile", "Messages", "News", "Settings"].map((el) => <NavigationItem title={el} key={el}/>)}
    </div>
  )
}

export default Navigation