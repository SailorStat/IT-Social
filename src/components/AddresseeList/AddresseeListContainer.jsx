import { connect } from "react-redux";
import AddresseeList from "./AddresseeList";
import { setCheckedDialog } from "../../redux/redux-store";
import { getDialogs } from "../../redux/selectors/dialogs-selector";

const mapStateToProps = (state) => {
  return {
    dialogs: getDialogs(state)
  }
}

const mapDispatchToProps = { setCheckedDialog }

const AddresseeListContainer = connect(mapStateToProps, mapDispatchToProps)(AddresseeList)

export default AddresseeListContainer