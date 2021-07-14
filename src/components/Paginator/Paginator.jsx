import React from "react";
import * as axios from "axios"
import c from "./Paginator.module.css"

class Paginator extends React.Component {
  componentDidMount() {
    window.props = this.props
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.userOnPage}`)
      .then(response => {
        this.props.responseSet(response)
      })
  }

  componentDidUpdate() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.userOnPage}`)
      .then(response => {
        this.props.responseUpdate(response)
      })
  }

  render() {
    return (
      <button className={c.paginator__button} onClick={() => this.props.upCurrentPage()}>Show more</button>
    )
  }
}

export default Paginator