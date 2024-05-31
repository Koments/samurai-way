import {ProfilePageProps} from "../types/Types";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfilePageProps = {
    posts: [
        {id: 1, message: "Hello my friend", likes: 10},
        {id: 2, message: "This is my first post", likes: 23},
    ],
    textForPostArea: ""
}
const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: new Date().getTime(),
                    message: state.textForPostArea,
                    likes: 0
                }],
                textForPostArea: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, textForPostArea: action.payload}
        default:
            return state
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, payload: newText}
}


export default profileReducer;