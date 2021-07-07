import c from "./Avatar.module.css"

const Avatar = (props) => {
  return (
    <div className={c.avatar}>
      <img src={props.avatar} alt="" />
    </div>
  )
}

export default Avatar