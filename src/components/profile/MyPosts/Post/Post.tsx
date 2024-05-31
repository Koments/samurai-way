import React from "react";
import classes from './Post.module.css';

type PostType = {
    message: string
    likes: number
}

export function Post(props: PostType) {
    return (<div className={classes.itemContainer}>
            <img src="https://t3.ftcdn.net/jpg/02/95/26/46/360_F_295264675_clwKZxogAhxLS9sD163Tgkz1WMHsq1RJ.jpg" alt="smiled face"/>
            <div className={classes.item}>{props.message}</div>
            <div>
                <span>Like {props.likes}</span>
            </div>
        </div>
    )
}