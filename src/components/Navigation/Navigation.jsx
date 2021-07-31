import s from"./Navigation.module.css"
import NavigationItem from "../NavigationItem/NavigationItem"

const Navigation = (props) => {
  return (
    <div className={s.navigation}>
      {Object.keys(props.pages).map((el) => 
        <NavigationItem key={"NavigationItem" + el} essence={el} link={props.pages[el]}/>
      )}
    </div>
  )
}

export default Navigation