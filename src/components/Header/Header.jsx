import c from "./Header.module.css"

const Header = () => {
    return (
      <div className={c.header}>
        <div className={c.header__logo}>IT-Social</div>
        <div className={c.header__menu}>
          <div className={c.header__item}>Login</div>
          <div className={c.header__item}>Registration</div>
          <div className={c.header__item}>Readme</div>
        </div>
      </div>
    )
}

export default Header