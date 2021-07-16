import c from "./Avatar.module.css"
import { NavLink } from "react-router-dom";

const Avatar = (props) => {
  return (
    <NavLink to={"/profile/" + props.userid} > 
      <div className={c.avatar}>
        <img src={props.avatar} alt="" userid={props.userid + ""} onClick={props.setCurrentUserPage}/>
      </div>
    </NavLink>
  )
}

export default Avatar