// import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, addPost, newPostValue, changeNewPostValue}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profile.postsData} changeNewPostValue={changeNewPostValue} newPostValue={newPostValue} addPost={addPost}/>
        </div>
    );
};

export default Profile;