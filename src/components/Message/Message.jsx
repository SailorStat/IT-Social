import c from "./Message.module.css"

const Message = (props) => {
  if (props.fromCurrentUser) {
    return (
      <div className={c.message + " " + c.outgoing}>
        <div className={c.message__date + " " + c.outgoing}>
          {props.date}
        </div>
        <div className={c.message__data + " " + c.outgoing}>
          <div className={c.message__author + " " + c.outgoing}>{props.fullName}</div>
          <div className={c.message__text + " " + c.outgoing}>{props.message}</div>
        </div>
        <div className={c.userPhoto + " " + c.outgoing}>
          <img src={props.userPhoto} alt="" />
        </div>
      </div>
    )
  }
  return (
    <div className={c.message}>
      <div className={c.userPhoto}>
        <img src={props.userPhoto} alt="" />
      </div>
      <div className={c.message__data}>
        <div className={c.message__author}>{props.fullName}</div>
        <div className={c.message__text}>{props.message}</div>
      </div>
      <div className={c.message__date}>
        {props.date}
      </div>
    </div>
  )
}

export default Message