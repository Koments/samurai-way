import {MessagesPage} from "../types/Types";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState: MessagesPage = {
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
}

export const dialogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageText: action.payload.text
            }
        }
        case SEND_MESSAGE: {
            const copyState = {
                ...state,
                dialogs: [...state.dialogs]
            }
            copyState.dialogs[action.payload.id].messages.push({
                id: copyState.dialogs[action.payload.id].messages.length + 1,
                message: copyState.newMessageText
            })

            copyState.newMessageText = ''

            return copyState
        }
        default:
            return state
    }
}

export const updateMessagesBodyActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, payload: {text: newText}}
}

export const sentMessageActionCreator = (id: number, newText: string) => {
    return {type: SEND_MESSAGE, payload: {id, text: newText}}
}

export default dialogReducer;