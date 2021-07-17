import c from "./PostWrapper.module.css"
import TextCreator from '../TextCreator/TextCreator';
import PostListContainer from "../PostList/PostListContainer";

const PostWrapper = (props) => {
  return ( 
    <div>
      <div className="content__wrapper">
        <div className={c.post__title}>My posts</div>
        <TextCreator placeholderText="Enter your text.." addBlock={props.addPost} getText={props.getText} setText={props.setPostValueText} userPhoto={props.userPhoto} userid={props.loginUser}/>
      </div>
      <PostListContainer />
    </div>
  )
}

export default PostWrapper