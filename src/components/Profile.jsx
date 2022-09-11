import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.mainImg}
                     src="https://www.ghimprove.com/_blog/images/posts/hello-world/mountain.jpg"
                     alt="IMg"/>
            </div>
            <div>
                <img className={classes.avatar} src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                     alt="Avatar"/>
            </div>
            <div className={classes.posts}>
                my posts

                <div className={classes.item}>
                    new post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                    <div>
                        post 3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;