import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = ({state}) => {
    const sendMessageText = React.createRef()
    const onClickSend = () => {

        alert(sendMessageText.current.value)
        sendMessageText.current.value = ''
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {state.dialogsData.map(dialog => <DialogItem key={  dialog.id} name={dialog.name} id={dialog.id}/> )}
            </div>
            <div className={classes.messages}>
                {state.messagesData.map(message => <Message key={message.id} message={message.message} />)}
                <div className="new_message">
                    <textarea ref={sendMessageText} name="" id="" cols="30" rows="5"></textarea>
                    <div>
                        <button onClick={onClickSend}>Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;