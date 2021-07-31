import s from "./Header.module.css"
import HeaderWrapperContainer from "./../HeaderWrapper/HeaderWrapperContainer";

const Header = () => {
    return (
      <div className={s.header}>
        <div className={s.header__logo}>IT-Social</div>
        <div className={s.header__menu}>
          <HeaderWrapperContainer />
        </div>
      </div>
    )
}

export default Header