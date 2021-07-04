import PostWrapper from "./PostWrapper";
import StoreContext from "./../../StoreContext";
import { addPostActionCreator, setPostValueTextActionCreator } from "../../redux/redux-store";
import noAvatar from "./../../assets/img/no-avatar.png"
import userPhoto from "./../../assets/img/userPhoto.jpg"

const PostWrapperContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <PostWrapper addBlock={() => store.dispatch(addPostActionCreator())} getText={store.getState().profilePage.getPostValueText()} setText={(event) => store.dispatch(setPostValueTextActionCreator(event))} userPhoto={userPhoto}/>
      )}
    </StoreContext.Consumer>
  )
}

export default PostWrapperContainer