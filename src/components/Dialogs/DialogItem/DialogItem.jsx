import classes from './DialogItem.module.css'
import {Link} from "react-router-dom";

const DialogItem = ({name, id}) => {
    let path = `/dialogs/${id}`

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <Link to={path}>{name}</Link>
        </div>
    );
};

export default DialogItem;