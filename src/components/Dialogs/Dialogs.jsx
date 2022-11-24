import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/dialogs-reducer";

const Dialogs = ({ dispatch, store }) => {
  let state = store.getState().dialogs;

  const onClickSend = () => {
    dispatch(sendMessageActionCreator());
  };

  const onChangeValue = (e) => {
    let value = e.target.value;
    dispatch(updateNewMessageTextActionCreator(value));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        {state.dialogsData.map((dialog) => (
          <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={classes.messages}>
        {state.messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <div className="new_message">
          <textarea
            value={state.newMessageText}
            onChange={onChangeValue}
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <div>
            <button onClick={onClickSend}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
