import PostWrapper from "./PostWrapper";
import StoreContext from "./../../StoreContext";

const PostWrapperContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <PostWrapper addBlock={store.addPost.bind(store)} getText={store.getPostValueText()} setText={store.setPostValueText.bind(store)}/>
      )}
    </StoreContext.Consumer>
  )
}

export default PostWrapperContainer