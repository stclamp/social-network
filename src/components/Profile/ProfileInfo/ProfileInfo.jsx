import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.main_img}
                     src="https://www.ghimprove.com/_blog/images/posts/hello-world/mountain.jpg"
                     alt="IMg"/>
            </div>
            <div className={classes.description_block}>
                <img className={classes.avatar} src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                     alt="Avatar"/>
                description
            </div>
        </div>
    );
};

export default ProfileInfo;