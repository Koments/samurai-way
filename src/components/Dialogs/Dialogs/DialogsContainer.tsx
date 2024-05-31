import {AppProps, DialogProp} from "../../../types/Types";
import {sentMessageActionCreator, updateMessagesBodyActionCreator} from "../../../redux/dialogs-reducer";
import {Chat} from "../Chat/Chat";
import {connect} from "react-redux";

// export function DialogsContainer(props: AppProps) {
//     const sendMessageHandler = (id: number, newText: string) => {
//         props.dispatch(sentMessageActionCreator(id, newText))
//     }
//
//     const updateBodyHandler = (text: string) => {
//         props.dispatch(updateMessagesBodyActionCreator(text))
//     }
//
//
//     return (
//         <Chat newMessageText={props.store.MessagesPage.newMessageText} dialogs={props.store.MessagesPage.dialogs}
//               updateBody={updateBodyHandler} sendMessage={sendMessageHandler}/>
//     )
// }

type StateProps = {
    MessagesPage: {
        dialogs: DialogProp[]
        newMessageText: string
        dispatch?: (action: { type: string, payload?: any }) => void
    }
}

const mapStateToProps = (state: StateProps) => {
    console.log(state)
    return {
        dialogs: state.MessagesPage.dialogs,
        newMessageText: state.MessagesPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateBody: (text: string) => {
            console.log(text)
            dispatch(updateMessagesBodyActionCreator(text))
        },
        sendMessage: (id: number, newText: string) => {
            dispatch(sentMessageActionCreator(id, newText))
        },

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)