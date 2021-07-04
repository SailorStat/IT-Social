import c from "./PostWrapper.module.css"
import TextCreator from '../TextCreator/TextCreator';
import PostContainer from "../Post/PostContainer";

const PostWrapper = (props) => {
  return ( 
    <div>
      <div className="content__wrapper">
        <div className={c.mypost__title}>My posts</div>
        <TextCreator placeholderText="Enter your text.." addBlock={props.addBlock} getText={props.getText} setText={props.setText} userPhoto={props.userPhoto}/>
      </div>
      <PostContainer />
    </div>
  )
}

export default PostWrapper