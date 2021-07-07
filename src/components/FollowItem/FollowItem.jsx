import c from "./FollowItem.module.css"
import Avatar from "./../Avatar/Avatar";

const FollowItem = (props) => {
  return (
   <div className={c.follow__item}>
     <Avatar avatar={props.avatar}/>
     <div>user info</div>
   </div> 
  )
}

export default FollowItem