import { connect } from "react-redux";
import AddresseeList from "./AddresseeList";
import { setCheckedDialog } from "../../redux/redux-store";

const mapStateToProps = (state) => {
  return {users: state.profilePage.users}
}

const mapDispatchToProps = { setCheckedDialog }

const AddresseeListContainer = connect(mapStateToProps, mapDispatchToProps)(AddresseeList)

export default AddresseeListContainer