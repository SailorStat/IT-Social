import s from "./PostWrapper.module.css"
import TextCreator from "../../loc/TextCreator/TextCreator";
import PostListContainer from "../PostList/PostListContainer";

const PostWrapper = (props) => {
  return ( 
    <div>
      <div className="content__wrapper">
        <div className={s.post__title}>My posts</div>
        <TextCreator placeholderText="Enter your text.." addBlock={props.addPost} getText={props.getText} setText={props.setPostValueText} userPhoto={props.userPhoto} userid={props.loginUser}/>
      </div>
      <PostListContainer />
    </div>
  )
}

export default PostWrapper