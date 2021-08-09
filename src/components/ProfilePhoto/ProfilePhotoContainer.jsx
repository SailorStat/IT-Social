import ProfilePhoto from "./ProfilePhoto";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUserId } from "../../redux/selectors/user-selector";
import { compose } from "redux";
import { putNewPhoto } from "./../../redux/redux-store";


const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    photo: state.profilePage.users[currentUserPage].photos,
    currentUserId: getCurrentUserId(state)
  }
}

const mapDispatchToProps = {
  putNewPhoto
}

const ProfilePhotoContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfilePhoto)

export default ProfilePhotoContainer