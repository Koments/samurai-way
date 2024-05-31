import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

export type UserContainerProps = {
    id: number,
    followed: boolean,
    name: string,
    photos: {
        small: string,
        large: string,
    },
    status: string,
    location: { city: string, country: string }
}

export type UsersContainerProps = {
    users: UserContainerProps[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type StateProps = {
    usersPage: UsersContainerProps
}

let mapStateToProps = (state: StateProps) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserContainerProps>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }, setTotalUsersCount: (usersCount: number) => {
            dispatch(setTotalUsersCountAC(usersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);