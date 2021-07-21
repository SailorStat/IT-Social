import React from "react";
import PaginatorButton from "../PaginatorButton/PaginatorButton";
import { getUsersAPI } from "./../../API";

class Paginator extends React.Component {
  addUser(func) {
    this.props.setFetchingTrue()
    getUsersAPI(this.props.currentPage, this.props.usersOnPage).then(response => {
      func(response)
      this.props.setFetchingFalse()
    })
  }

  componentDidMount() {
   this.addUser(this.props.createUsers)
  }

  componentDidUpdate() {
    this.addUser(this.props.updateUsers)
  }

  render() {
    return (
      <PaginatorButton upCurrentPage={this.props.upCurrentPage}/>
    )
  }
}

export default Paginator