import { connect } from "react-redux";
import AddresseeList from "./AddresseeList";
import { setCheckedDialogActionCreator } from "../../redux/store";

const mapStateToProps = (state) => {
  return {users: state.profilePage.users}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCheckedDialog: (userId) => dispatch(setCheckedDialogActionCreator(userId))
  }
}

const AddresseeListContainer = connect(mapStateToProps, mapDispatchToProps)(AddresseeList)

export default AddresseeListContainer