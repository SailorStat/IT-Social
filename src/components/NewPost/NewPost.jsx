import c from"./NewPost.module.css"
import NoAvatar from "./../../assets/no-avatar.png"

const NewPost = () => {
    return (
      <div className={c.newpost__wrapper}>
        <div className={c.profile__smallphoto}>
          <img src={NoAvatar} alt="" />
        </div>
        <div className={c.newpost__content}>
          <textarea name="content" id="" rows="4" className={c.newpost__textarea} placeholder="Enter your post"></textarea>
          <button className={c.newpost__button}>Send post</button>
        </div>
      </div >
    )
}

export default NewPost