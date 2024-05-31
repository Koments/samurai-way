import {Post} from "../../../types/Types";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

// export function MyPostsContainer(props: StoreProps) {
//     const addPostHandler = () => {
//         props.dispatch(addPostActionCreator());
//     }
//
//     const onPostChange = (text: string) => {
//         let action = updateNewPostActionCreator(text)
//         props.dispatch(action)
//     }
//
//
//     return (
//         <MyPosts updateNewPostText={(text) => {
//             onPostChange(text)
//         }} addPost={addPostHandler} posts={props.store.ProfilePage.posts} textForPostArea={props.store.ProfilePage.textForPostArea}/>
//     )
// }

type StateProps = {
    ProfilePage: {
        posts: Post[],
        textForPostArea: string
    }
}

const mapStateToProps = (state: StateProps) => {
    console.log(state)
    return {
        posts: state.ProfilePage.posts,
        textForPostArea: state.ProfilePage.textForPostArea
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)