import classes from './Post.module.css'

const Post = ({post}) => {
    return (
        <div className={classes.item}>
            <img src="https://freesvg.org/img/Male-Avatar.png" alt="img"/>
            post {post}
        </div>
    );
};

export default Post;