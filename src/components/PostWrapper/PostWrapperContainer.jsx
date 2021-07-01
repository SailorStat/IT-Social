import PostWrapper from "./PostWrapper";
import StateContext from "./../../StateContext";
import { addPost } from "../../redux/state";

const PostWrapperContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <PostWrapper addBlock={addPost} getText={state.profilePage.getPostValueText()} setText={state.profilePage.setPostValueText.bind(state)}/>
      )}
    </StateContext.Consumer>
  )
}

export default PostWrapperContainer