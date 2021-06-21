import c from "./NavigationItem.module.css"

const initialState = {"Profile": true, "Messages": false, "News": false, "Settings": false}

const NavigationItem = (prop) => {
  console.log(initialState)
  return (
    <>
      {Object.keys(initialState).map((el) => <div key={el} className={c.nav__title + " " + (initialState[el] ? c.checked : "")}>{el}</div>)}
    </>
  )
}

export default NavigationItem