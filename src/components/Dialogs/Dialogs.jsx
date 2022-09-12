import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
    {
        id: 1,
        name: 'Pavel'
    },
    {
        id: 2,
        name: 'Aliona'
    },
    {
        id: 3,
        name: 'Yevhen'
    },
    {
        id: 4,
        name: 'Alex'
    },
    {
        id: 5,
        name: 'Ruslan'
    },
    {
        id: 6,
        name: 'Mom'
    },
]

let messagesData = [
    {
        id:1,
        message: "Hi"
    },
    {
        id:2,
        message: "How are you"
    },
    {
        id:3,
        message: "I'm doing my best"
    },
]

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/> )}
            </div>
            <div className={classes.messages}>
                {messagesData.map(message => <Message key={message.id} message={message.message} />)}
            </div>
        </div>
    );
};

export default Dialogs;