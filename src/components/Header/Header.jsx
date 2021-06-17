import "./Header.css"

const Header = () => {
    return (
      <div className="header">
        <div className="header__logo">IT-Social</div>
        <div className="header__menu">
          <div className="header__item">Login</div>
          <div className="header__item">Registration</div>
          <div className="header__item">Readme</div>
        </div>
      </div>
    )
}

export default Header