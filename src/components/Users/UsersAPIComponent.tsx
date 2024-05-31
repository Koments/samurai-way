import {UserContainerProps} from "./UsersContainer";
import axios from "axios";
import React from "react";
import {Users} from "./Users";

type ItemType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: boolean
}

type ResponseType = {
    items: ItemType[],
    totalCount: number,
    error: null
}

class UsersAPIComponent extends React.Component<any> {
    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            console.log('1', response.data.totalCount)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users  currentPage={this.props.currentPage} follow={this.props.follow} onPageChanged={this.onPageChanged} pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount} unFollow={this.props.unFollow} users={this.props.users}></Users>
    }
}

export default UsersAPIComponent;