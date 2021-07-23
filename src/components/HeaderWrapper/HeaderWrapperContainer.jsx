import { connect } from "react-redux";
import HeaderWrapper from "./HeaderWrapper";
import { userAuth } from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginPage.isLoggedIn
  }
}

const mapDispatchToProps = { userAuth }

const HeaderWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper)

export default HeaderWrapperContainer