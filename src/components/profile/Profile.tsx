import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppProps} from "../../types/Types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export function Profile() {

    return (<div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}