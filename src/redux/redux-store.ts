import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let Reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: dialogsReducer,
    siteBar: sidebarReducer,
    usersPage: usersReducer
})

export let store = createStore(Reducers)

export type RootReducerType = ReturnType<typeof Reducers>
export type RootState = ReturnType<typeof store.getState>