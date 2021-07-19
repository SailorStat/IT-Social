import c from "./Header.module.css"
import HeaderWrapperContainer from "./../HeaderWrapper/HeaderWrapperContainer";

const Header = () => {
    return (
      <div className={c.header}>
        <div className={c.header__logo}>IT-Social</div>
        <div className={c.header__menu}>
          <HeaderWrapperContainer />
        </div>
      </div>
    )
}

export default Header