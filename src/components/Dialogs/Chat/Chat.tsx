import {useParams} from "react-router-dom";
import React, {useRef} from "react";
import classes from "./Chat.module.css";
import {DialogProp, MessagesPage} from "../../../types/Types";

type ChatProps = {
    dialogs: Array<DialogProp>
    newMessageText: string
    updateBody: (text: string) => void
    sendMessage: (id: number, newText: string) => void
}

export function Chat(props: ChatProps) {
    const params = useParams()
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const id = params && params.dialogId ? +params.dialogId : 0;

    const addPostHandler = () => {
        if (
            newPostElement &&
            newPostElement.current
        ) {
            const text = newPostElement.current?.value
            props.sendMessage(id, text)
        }
    }

    const onChangeHandler = () => {
        if (
            newPostElement &&
            newPostElement.current
        ) {
            props.updateBody(newPostElement.current?.value)
        }
    }


    return (
        <div className={classes.messages}>
            <h2>{props.dialogs[id].name}</h2>
            <div className={classes.messageContainer}> {props.dialogs[id].messages.map(item =>
                <div key={item.id}
                     className={item.id % 2 ? classes.messageSent : classes.messageReceived}>{item.message}</div>)}
            </div>
            <textarea value={props.newMessageText} onChange={onChangeHandler} ref={newPostElement} cols={80} rows={10}></textarea>
            <button onClick={addPostHandler}>Sent</button>
        </div>
    )
}