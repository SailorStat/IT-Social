import c from"./TextCreator.module.css"
import NoAvatar from "./../../assets/no-avatar.png"

const TextCreator = () => {
    return (
      <div className={c.textcreator__wrapper}>
        <div className={c.profile__smallphoto}>
          <img src={NoAvatar} alt="" />
        </div>
        <div className={c.textcreator__content}>
          <textarea name="content" id="" rows="4" className={c.textcreator__textarea} placeholder="Enter your text.."></textarea>
          <button className={c.textcreator__button}>Send</button>
        </div>
      </div >
    )
}

export default TextCreator