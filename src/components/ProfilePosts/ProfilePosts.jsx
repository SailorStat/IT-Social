import c from "./ProfilePosts.module.css"

const ProfilePosts = () => {
  return (
    <div>
      <div className={c.mypost__wrapper}>
        <div className={c.mypost__title}>Мои посты</div>
        <div className={c.newpost}>Новый пост</div>
      </div>
      <div className={c.post}>пост</div>
      <div className={c.post}>пост</div>
      <div className={c.post}>пост</div>
      <div className={c.post}>пост</div>
    </div>
  )
}

export default ProfilePosts