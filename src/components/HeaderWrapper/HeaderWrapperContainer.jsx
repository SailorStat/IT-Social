import { connect } from "react-redux";
import HeaderWrapper from "./HeaderWrapper";
import { deleteLoginUser } from "./../../redux/redux-store";
import { getIsLoggedIn } from "../../redux/selectors/user-selector";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: getIsLoggedIn(state)
  }
}

const mapDispatchToProps = { deleteLoginUser }

const HeaderWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper)

export default HeaderWrapperContainer