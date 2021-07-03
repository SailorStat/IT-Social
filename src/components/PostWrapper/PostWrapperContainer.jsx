import PostWrapper from "./PostWrapper";
import StoreContext from "./../../StoreContext";
import { addPostActionCreator, setPostValueTextActionCreator } from "../../redux/store";

const PostWrapperContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <PostWrapper addBlock={() => store.dispatch(addPostActionCreator())} getText={store.getState().profilePage.getPostValueText()} setText={(event) => store.dispatch(setPostValueTextActionCreator(event))}/>
      )}
    </StoreContext.Consumer>
  )
}

export default PostWrapperContainer