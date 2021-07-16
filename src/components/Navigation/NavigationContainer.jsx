import Navigation from "./Navigation";
import { connect } from "react-redux";
import { setCurrentUserPage } from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    userid: state.loginPage.currentUser.id
  }
}

const mapDispatchToProps = { setCurrentUserPage }

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer