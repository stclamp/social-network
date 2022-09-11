import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts

            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>

                <Post message={"Hi, it's my first post!"} likesCount = {15}/>
                <Post message={"How are you?"} likesCount={20}/>
            </div>
        </div>
    );
};

export default MyPosts;