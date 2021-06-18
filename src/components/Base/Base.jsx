import c from "./Base.module.css"
import Profile from './../Profile/Profile';

const Base = () => {
  return (
    <div className={c.base}>
      <Profile />
      {/* <div className="messages">Сообщения</div>
      <div className="news">Новости</div>
      <div className="settings">Настройки</div>
      <div className="login">Логинизация</div> */}
    </div>
  )
}

export default Base