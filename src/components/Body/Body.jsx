import c from "./Body.module.css"
import Navigation from './../Navigation/Navigation';
import Base from './../Base/Base';

const Body = () => {
  return (
    <div className={c.body}>
      <Navigation />
      <Base />
    </div>
  )
}

export default Body