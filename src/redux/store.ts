import {StateType} from "../types/Types";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

type observerType = (state: any) => void
export let store = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, message: "Hello my friend", likes: 10},
                {id: 2, message: "This is my first post", likes: 23},
            ],
            textForPostArea: ""
        },
        MessagesPage: {
            newMessageText: "",
            dialogs: [
                {
                    id: 1, name: "Dimich", messages: [
                        {id: 1, message: "Hi"},
                        {id: 2, message: "Hello"},
                        {id: 3, message: "How are you?"},
                        {id: 4, message: "HaHaha"},
                    ]
                },
                {
                    id: 2, name: "Andrey", messages: [
                        {id: 1, message: "Hi"},
                        {id: 2, message: "Hello"},
                        {id: 3, message: "How are you?"},
                        {id: 4, message: "HaHaha"},
                    ]
                },
                {
                    id: 3, name: "Sveta", messages: [
                        {id: 1, message: "Hi"},
                        {id: 2, message: "Hello"},
                        {id: 3, message: "How are you?"},
                        {id: 4, message: "HaHaha"},
                    ]
                },
                {
                    id: 4, name: "Sasha", messages: [
                        {id: 1, message: "Hi"},
                        {id: 2, message: "Hello"},
                        {id: 3, message: "How are you?"},
                        {id: 4, message: "HaHaha"},
                    ]
                },
                {
                    id: 5, name: "Vadim", messages: [
                        {id: 1, message: "Hi"},
                        {id: 2, message: "Hello"},
                        {id: 3, message: "How are you?"},
                        {id: 4, message: "HaHaha"},
                    ]
                },
                {
                    id: 6, name: "Kiril",
                    messages: [
                        {id: 1, message: "Hi"},
                        {id: 2, message: "Hello"},
                        {id: 3, message: "How are you?"},
                        {id: 4, message: "HaHaha"},
                    ]
                }
            ]
        },
        siteBar: {
            friendsList: [
                {
                    id: 1,
                    name: 'Anton',
                    img: 'https://t3.ftcdn.net/jpg/02/95/26/46/360_F_295264675_clwKZxogAhxLS9sD163Tgkz1WMHsq1RJ.jpg'
                },
                {
                    id: 2,
                    name: 'Kate',
                    img: 'https://t3.ftcdn.net/jpg/02/95/26/46/360_F_295264675_clwKZxogAhxLS9sD163Tgkz1WMHsq1RJ.jpg'
                },
                {
                    id: 3,
                    name: 'Steve',
                    img: 'https://t3.ftcdn.net/jpg/02/95/26/46/360_F_295264675_clwKZxogAhxLS9sD163Tgkz1WMHsq1RJ.jpg'
                },
                {
                    id: 4,
                    name: 'Leon',
                    img: 'https://t3.ftcdn.net/jpg/02/95/26/46/360_F_295264675_clwKZxogAhxLS9sD163Tgkz1WMHsq1RJ.jpg'
                }

            ]
        },
    },
    _callSubscribe(observer: observerType) {
        this.subscribe = observer
    },

    subscribe(state: StateType) {
        console.log('Changed')
    },
    getState() {
        return this._state
    },

    dispatch(action: any) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.MessagesPage = dialogReducer(this._state.MessagesPage, action)
        this._state.siteBar = sidebarReducer(this._state.siteBar, action)

        this.subscribe(this._state)
    }
}
export default store;
