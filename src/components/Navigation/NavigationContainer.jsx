import Navigation from "./Navigation";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    pages: state.pages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer