import { connect } from "react-redux";
import HeaderWrapper from "./HeaderWrapper";
import { setLoginUser, setLogoutUser} from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginPage.isLoggedIn
  }
}

const mapDispatchToProps = {setLoginUser, setLogoutUser}

const HeaderWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper)

export default HeaderWrapperContainer