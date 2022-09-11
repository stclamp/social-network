import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png"
                alt="Logo"/>
        </header>
    );
};

export default Header;