import s from "./Body.module.css"
import Base from '../Base/Base';
import NavigationContainer from "../Navigation/NavigationContainer";

const Body = () => {
  return (
    <div className={s.body}>
      <NavigationContainer />
      <Base />
    </div>
  )
}

export default Body