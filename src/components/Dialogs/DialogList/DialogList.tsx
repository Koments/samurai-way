import classes from './DialogList.module.css'
import {NavLink, Route} from "react-router-dom";
import React from "react";
import {Chat} from "../Chat/Chat";

type DialogProps = {
    id: number
    name: string
}

export function DialogList(props: DialogProps) {
    const path = `/dialogs/${props.id - 1}`
    return <div className={`${classes.dialog} ${classes.active}`}>
        <NavLink to={path}>{props.name}</NavLink>

        {/*<Route path={path} element={() => <Chat />}></Route>*/}

    </div>
}