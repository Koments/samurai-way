export type Post = {
    id: number,
    message: string,
    likes: number
}

export type DialogProp = {
    id: number,
    name: string,
    messages: MessageProp[]
}

export type MessageProp = {
    id: number,
    message: string,
}

export type FriendsProps = {
    id: number
    name: string
    img: string
}

export type ProfilePageProps = {
    posts: Post[],
    textForPostArea: string
}

export type MessagesPage = {
    dialogs: DialogProp[]
    newMessageText: string
    dispatch?: (action: { type: string, payload?: any }) => void
}

export type MessagesPageProps = {
    dialogs: DialogProp[]
    dispatch?: (action: { type: string, payload?: any }) => void
}

export type SiteBarProps = {
    friendsList: FriendsProps[]
}

export type AppPageProps = {
    ProfilePage: ProfilePageProps
    MessagesPage: MessagesPage
    siteBar: SiteBarProps
}

export type StateType = {
    ProfilePage: ProfilePageProps
    MessagesPage: MessagesPage
    siteBar: SiteBarProps
}

export type AppProps = {
    store: AppPageProps,
    dispatch: (action: { type: string, payload?: any }) => void
}

export type StoreProps = {
    store: AppPageProps,
    dispatch: (action: { type: string, payload?: any }) => void
}