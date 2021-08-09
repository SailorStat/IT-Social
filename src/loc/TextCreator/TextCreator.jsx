import s from"./TextCreator.module.css"
import Avatar from "../Avatar/Avatar";
import AcceptButton from "../AcceptButton/AcceptButton";

const TextCreator = (props) => {
  return (
    <div className={s.textcreator__wrapper}>
      <Avatar avatar={props.userPhoto} userid={props.userid}/>
      <div className={s.textcreator__content}>
        <textarea name="content" id="" rows="4" className={s.textcreator__textarea} placeholder={props.placeholderText} onChange={props.setText} value={props.getText}></textarea>
        <AcceptButton callBackFunc={props.addBlock} isDisabled={!props.userid} buttonTitle="Send" avatar={props.userPhoto} fullname={props.fullName}/>
      </div>
    </div >
  )
}

export default TextCreator