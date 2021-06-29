import NavigationItem from "./NavigationItem"
import StateContext from "./../../StateContext";

const NavigationItemContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <>
          {Object.keys(state.pages).map((el) => 
            <NavigationItem key={"NavigationItem" + el} essence={el} link={state.pages[el]}/>
          )}
        </>
      )}
    </StateContext.Consumer>
  )
}

export default NavigationItemContainer