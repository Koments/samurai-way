import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FriendsList} from "../FriendsList/FriendsList";
import {SiteBarProps} from "../../types/Types";

const classNameFunc = ({isActive}: any) => {
    return (isActive ? "active_link" : "not_visited_link");
};

export function Navbar() {
    return (<nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={classNameFunc} to={"/profile"}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classNameFunc} to={"/dialogs"}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classNameFunc} to={"/news"}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classNameFunc} to={"/music"}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classNameFunc} to={"/setting"}>Setting</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classNameFunc} to={"/users"}>Users</NavLink>
            </div>

            <div className={classes.item}>
                <FriendsList/>
            </div>
        </nav>
    )
}
