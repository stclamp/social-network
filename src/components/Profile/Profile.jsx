import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.main_img}
                     src="https://www.ghimprove.com/_blog/images/posts/hello-world/mountain.jpg"
                     alt="IMg"/>
            </div>
            <div>
                <img className={classes.avatar} src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                     alt="Avatar"/>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;