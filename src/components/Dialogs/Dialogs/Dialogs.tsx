import classes from './Dialogs.module.css'
import React from "react";
import {AppPageProps, MessagesPage} from "../../../types/Types";
import {DialogList} from "../DialogList/DialogList";
import {useSelector} from "react-redux";


export function Dialogs( ) {
    const dialogs = useSelector((state:AppPageProps) => state.MessagesPage.dialogs)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs.map(el => <DialogList key={el.id} name={el.name} id={el.id}/>)}
            </div>
        </ div>
    )
}