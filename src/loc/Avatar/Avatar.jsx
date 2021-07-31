import s from "./Avatar.module.css"
import { NavLink } from "react-router-dom";

const Avatar = (props) => {
  return (
    <NavLink to={"/profile/" + props.userid} > 
      <div className={s.avatar}>
        <img src={props.avatar} alt=""/>
      </div>
    </NavLink>
  )
}

export default Avatar