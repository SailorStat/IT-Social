import { connect } from "react-redux";
import { upCurrentPage} from "../../redux/redux-store";
import PaginatorButton from "./PaginatorButton";


const mapStateToProps = (state) => ({
  isFetching: state.usersPage.isFetching
})

const mapDispatchToProps = {upCurrentPage}

const PaginatorButtonContainer = connect(mapStateToProps, mapDispatchToProps)(PaginatorButton)

export default PaginatorButtonContainer