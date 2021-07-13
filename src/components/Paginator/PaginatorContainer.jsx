import React from "react";
import * as axios from "axios"
import { connect } from "react-redux";
import { setTotalCountActionCreator } from "../../redux/redux-store";
import { setUsersActionCreator } from "./../../redux/redux-store";

class Paginator extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        console.log(response)
        this.props.setResponse(response)
      })
  }

  render() {
    return <div>Я тут {this.props.totalCount}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    totalCount: state.usersPage.pagination.totalCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setResponse: (response) => {
      dispatch(setTotalCountActionCreator(response.data.totalCount))
      dispatch(setUsersActionCreator(response.data.items))
    }
  }
}

const PaginatorContainer = connect(mapStateToProps, mapDispatchToProps)(Paginator)

export default PaginatorContainer