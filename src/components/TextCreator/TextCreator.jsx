import c from"./TextCreator.module.css"

const TextCreator = (props) => {
    return (
      <div className={c.textcreator__wrapper}>
        <div className={c.profile__smallphoto}>
          <img src={props.userPhoto} alt="" />
        </div>
        <div className={c.textcreator__content}>
          <textarea name="content" id="" rows="4" className={c.textcreator__textarea} placeholder={props.placeholderText} onChange={props.setText} value={props.getText}></textarea>
          <button className={c.textcreator__button} onClick={props.addBlock}>Send</button>
        </div>
      </div >
    )
}

export default TextCreator