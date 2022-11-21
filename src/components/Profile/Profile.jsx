// import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, dispatch, newPostValue }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={profile.postsData} dispatch={dispatch} newPostValue={newPostValue} />
        </div>
    );
};

export default Profile;