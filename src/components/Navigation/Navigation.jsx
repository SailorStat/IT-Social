import c from"./Navigation.module.css"
import NavigationItemContainer from "./../NavigationItem/NavigationItemContainer";

const Navigation = () => {
  return (
    <div className={c.navigation}>
      <NavigationItemContainer />
    </div>
  )
}

export default Navigation