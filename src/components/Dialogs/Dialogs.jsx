import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({state}) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {state.dialogsData.map(dialog => <DialogItem key={  dialog.id} name={dialog.name} id={dialog.id}/> )}
            </div>
            <div className={classes.messages}>
                {state.messagesData.map(message => <Message key={message.id} message={message.message} />)}
            </div>
        </div>
    );
};

export default Dialogs;