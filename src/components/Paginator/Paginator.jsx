import React from "react";
import * as axios from "axios"
import PaginatorButton from "../PaginatorButton/PaginatorButton";

class Paginator extends React.Component {
  addUser(func) {
    this.endPoint = "https://social-network.samuraijs.com/api/1.0/"
    this.options = {
      withCredentials: true,
      headers: {
        "API-KEY": "529b037a-4944-4887-8582-929139b7810c"
      }
    }
    this.props.setFetchingTrue()
    axios.get(`${this.endPoint}users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`, this.options)
         .then(response => {
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