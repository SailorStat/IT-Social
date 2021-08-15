import { useEffect } from "react";
import PaginatorButtonContainer from "../PaginatorButton/PaginatorButtonContainer";

const Paginator = ({currentPage, usersOnPage, createUsers, updateUsers, setUsers}) => {
  useEffect(() => {
    setUsers(currentPage, usersOnPage, currentPage === 1 ? createUsers : updateUsers)
  }, [currentPage, usersOnPage, createUsers, updateUsers, setUsers])

  return (
    <PaginatorButtonContainer />
  )
}

export default Paginator