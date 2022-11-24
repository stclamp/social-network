import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import { addPostActionCreator, changeNewPostValueActionCreator } from "../../../Redux/profile-reducer";

const MyPosts = ({ posts, dispatch, newPostValue }) => {


    let newPostElement = React.createRef()

    const onAddPost = () => {
        dispatch(addPostActionCreator())
    }

    const onChangePost = () => {
        let text = newPostElement.current.value
        dispatch(changeNewPostValueActionCreator(text))
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
                {posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)}
            </div>
        </div>
    );
};

export default MyPosts;