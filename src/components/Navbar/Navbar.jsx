import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item}`}>
                <a href="src/components/Navbar/Navbar#s">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/Navbar/Navbar#s">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/Navbar/Navbar#s">News</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/Navbar/Navbar#s">Music</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/Navbar/Navbar#s">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;