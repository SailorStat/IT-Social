import { connect } from "react-redux";
import Paginator from "./Paginator";
import { createUsersActionCreator, setTotalCountActionCreator, updateUsersActionCreator, upCurrentPageActionCreator, setFetchingTrueActionCreator, setFetchingFalseActionCreator } from "../../redux/redux-store";


const mapStateToProps = (state) => {
  const {totalCount, usersOnPage, currentPage} = state.usersPage.pagination
  return {
    totalCount,
    usersOnPage,
    currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    responseSet: (response) => {
      dispatch(setTotalCountActionCreator(response.data.totalCount))
      dispatch(createUsersActionCreator(response.data.items))
    },
    responseUpdate: (response) => dispatch(updateUsersActionCreator(response.data.items)),
    upCurrentPage: () => dispatch(upCurrentPageActionCreator()),
    setFetchingTrue: () => dispatch(setFetchingTrueActionCreator()),
    setFetchingFalse: () => dispatch(setFetchingFalseActionCreator())
  }
}

const PaginatorContainer = connect(mapStateToProps, mapDispatchToProps)(Paginator)

export default PaginatorContainer