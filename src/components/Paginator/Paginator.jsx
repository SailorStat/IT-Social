import React from "react";
import * as axios from "axios"
import PaginatorButton from "../PaginatorButton/PaginatorButton";

class Paginator extends React.Component {
  componentDidMount() {
    this.props.setFetchingTrue()
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.userOnPage}`)
      .then(response => {
        this.props.createUsers(response)
        this.props.setFetchingFalse()
      })
  }

  componentDidUpdate() {
    this.props.setFetchingTrue()
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.userOnPage}`)
      .then(response => {
        this.props.updateUsers(response)
        this.props.setFetchingFalse()
      })
  }

  render() {
    return (
      <PaginatorButton upCurrentPage={this.props.upCurrentPage}/>
    )
  }
}

export default Paginator