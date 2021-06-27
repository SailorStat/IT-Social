import NavigationItem from "./NavigationItem"

const initialState = {
  "Profile": "/",
  "Dialogs": "/dialogs",
  "News": "/news",
  "Settings": "/settings"
}


const NavigationItemContainer = () => {
  return (
    <>
      {Object.keys(initialState).map((el) => 
        <NavigationItem key={el} essence={el} link={initialState[el]}/>
      )}
    </>
  )
}

export default NavigationItemContainer