import s from"./TextCreator.module.css"
import Avatar from "../Avatar/Avatar";

const TextCreator = (props) => {
  return (
    <div className={s.textcreator__wrapper}>
      <Avatar avatar={props.userPhoto} userid={props.userid}/>
      <div className={s.textcreator__content}>
        <textarea name="content" id="" rows="4" className={s.textcreator__textarea} placeholder={props.placeholderText} onChange={props.setText} value={props.getText}></textarea>
        <button className={s.textcreator__button} onClick={props.addBlock} avatar={props.userPhoto} fullname={props.fullName} disabled={!props.fullName}>Send</button>
      </div>
    </div >
  )
}

export default TextCreator