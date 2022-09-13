// import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={state.postsData}/>
        </div>
    );
};

export default Profile;