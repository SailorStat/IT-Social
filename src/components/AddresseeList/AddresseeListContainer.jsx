import { connect } from "react-redux";
import AddresseeList from "./AddresseeList";
import { setCheckedDialog } from "../../redux/redux-store";
import { getUsers } from "./../../redux/selectors/user-selector";

const mapStateToProps = (state) => {
  return {
    users: getUsers(state)
  }
}

const mapDispatchToProps = { setCheckedDialog }

const AddresseeListContainer = connect(mapStateToProps, mapDispatchToProps)(AddresseeList)

export default AddresseeListContainer