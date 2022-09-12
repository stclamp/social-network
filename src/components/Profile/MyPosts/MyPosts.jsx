import classes from './MyPosts.module.css'
import Post from "./Post/Post";

let postsData = [
    {
        id: 1,
        message: "Hi, it's my first post!",
        likesCount: 5
    },
    {
        id: 2,
        message: "How are you?",
        likesCount: 15
    },
]

const MyPosts = () => {
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
                {postsData.map(post => <Post key={post.id} message={post.message} likesCount = {post.likesCount}/>)}
            </div>
        </div>
    );
};

export default MyPosts;