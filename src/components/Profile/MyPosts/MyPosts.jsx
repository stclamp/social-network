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

                <Post post={1}/>
                <Post post={2}/>
                <Post post={3}/>
            </div>
        </div>
    );
};

export default MyPosts;