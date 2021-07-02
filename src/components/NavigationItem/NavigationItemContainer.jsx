import NavigationItem from "./NavigationItem"
import StoreContext from "./../../StoreContext";

const NavigationItemContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <>
          {Object.keys(store.getState().pages).map((el) => 
            <NavigationItem key={"NavigationItem" + el} essence={el} link={store.getState().pages[el]}/>
          )}
        </>
      )}
    </StoreContext.Consumer>
  )
}

export default NavigationItemContainer