import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({state}) => {
    return (
        <div className={classes.add_posts}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {state.map(post => <Post key={post.id} message={post.message} likesCount = {post.likesCount}/>)}
            </div>
        </div>
    );
};

export default MyPosts;