import c from"./Navigation.module.css"
import NavigationItem from "../NavigationItem/NavigationItem"

const Navigation = (props) => {
  return (
    <div className={c.navigation} onClick={props.setCurrentUserPage}>
      {Object.keys(props.pages).map((el) => 
        <NavigationItem key={"NavigationItem" + el} essence={el} link={props.pages[el]} userid={props.userid}/>
      )}
    </div>
  )
}

export default Navigation