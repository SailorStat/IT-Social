import c from"./Navigation.module.css"
import NavigationItem from '../NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <div className={c.navigation}>
      <NavigationItem />
    </div>
  )
}

export default Navigation