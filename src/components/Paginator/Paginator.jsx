import React from "react";
import PaginatorButtonContainer from "../PaginatorButton/PaginatorButtonContainer";

class Paginator extends React.Component {
  componentDidMount() {
    this.props.setUsers(this.props.currentPage, this.props.usersOnPage, this.props.createUsers)
  }

  componentDidUpdate() {
    this.props.setUsers(this.props.currentPage, this.props.usersOnPage, this.props.updateUsers)
  }

  render() {
    return (
      <PaginatorButtonContainer />
    )
  }
}

export default Paginator