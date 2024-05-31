import React, {RefObject} from "react";
import classes from './MyPosts.module.css';
import {Post as PostType} from "../../../types/Types";
import {Post} from "./Post/Post";

type MyPostsProps = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: Array<PostType>
    textForPostArea: string
}

export function MyPosts(props: MyPostsProps) {
    const newText: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPostHandler = () => {
        props.addPost()
    }

    const onChangeHandler = () => {
        if (newText.current)
            props.updateNewPostText(newText.current.value)
    }

    return (
        <div className={classes.postDescription}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangeHandler} ref={newText} value={props.textForPostArea} name="text" id="text"
                          cols={30} rows={10}></textarea>
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={classes.posts}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes}/>)}
            </div>
        </div>
    )
}