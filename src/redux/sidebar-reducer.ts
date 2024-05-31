import {SiteBarProps} from "../types/Types";

let initialState: SiteBarProps = {
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
}

const sidebarReducer = (state = initialState, action: any) => {
    return state
}

export default sidebarReducer;