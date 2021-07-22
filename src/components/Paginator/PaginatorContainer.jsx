import { connect } from "react-redux";
import Paginator from "./Paginator";
import { createUsers, updateUsers, setUsers } from "../../redux/redux-store";


const mapStateToProps = (state) => {
  const {totalCount, usersOnPage, currentPage} = state.usersPage.pagination
  return {
    totalCount,
    usersOnPage,
    currentPage
  }
}

const mapDispatchToProps = {
  createUsers,
  updateUsers,
  setUsers
}

const PaginatorContainer = connect(mapStateToProps, mapDispatchToProps)(Paginator)

export default PaginatorContainer