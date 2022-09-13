import classes from './SideBar.module.css'

const SideBar = ({state}) => {

    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>Friends</h3>
            <div className={classes.friends_block}>
                {state.sideBarData.map(user => (
                    <div key={user.id} className={classes.friend}>
                        <span className={classes.avatar}></span>
                        <p className={classes.name}>{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;