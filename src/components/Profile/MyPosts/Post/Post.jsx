import classes from './Post.module.css'

const Post = ({message, likesCount}) => {
    return (
        <div className={classes.item}>
            <img src="https://freesvg.org/img/Male-Avatar.png" alt="img"/>
            {message}
            <div>
                <span>Like!</span>
            </div>
            <div>
                <span>{likesCount}</span>
            </div>
        </div>
    );
};

export default Post;