import {UserContainerProps, UsersContainerProps} from "../components/Users/UsersContainer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';

let initialState: UsersContainerProps = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1
}
const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }

        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_USERS_COUNT: {
            return {...state, totalUsersCount: action.usersCount}
        }

        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users: Array<UserContainerProps>) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: SET_USERS_COUNT,
        usersCount
    }
}

export default userReducer;