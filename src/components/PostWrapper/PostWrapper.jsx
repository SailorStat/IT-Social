import c from "./PostWrapper.module.css"
import TextCreator from '../TextCreator/TextCreator';
import PostListContainer from "../PostList/PostListContainer";

const PostWrapper = (props) => {
  return ( 
    <div>
      <div className="content__wrapper">
        <div className={c.mypost__title}>My posts</div>
        <TextCreator placeholderText="Enter your text.." addBlock={props.addBlock} getText={props.getText} setText={props.setText} userPhoto={props.userPhoto}/>
      </div>
      <PostListContainer />
    </div>
  )
}

export default PostWrapper