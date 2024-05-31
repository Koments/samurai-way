import {AppProps, SiteBarProps, StateType} from "../../types/Types";
import classes from './FriendsList.module.css';
import {useSelector} from "react-redux";

export const FriendsList = () => {
    const store = useSelector((state:StateType) => state.siteBar.friendsList)
    return (
        <div>
            <div className={classes.title}>
                Friends List:
            </div>
            <div className={classes.friendsContainer}>
                {store.map(el => {
                    return <div  key={el.id} className={classes.friendContainer}>
                        <div>{el.name}</div>
                        <div><img src={el.img} alt={el.img}/></div>
                    </div>
                })}
            </div>
        </div>
    );
};