import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({posts, addPost, newPostValue, changeNewPostValue}) => {


    let newPostElement = React.createRef()

    const onAddPost = () => {
        addPost()
    }

    const onChangePost = () => {
        changeNewPostValue(newPostElement.current.value)
    }

    return (
        <div className={classes.add_posts}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangePost} ref={newPostElement} name="" id="" cols="30" rows="5" value={newPostValue} />
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts.map(post => <Post key={post.id} message={post.message} likesCount = {post.likesCount}/>)}
            </div>
        </div>
    );
};

export default MyPosts;